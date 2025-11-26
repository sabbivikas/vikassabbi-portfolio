import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface WeatherData {
  temperature: number;
  weatherCode: number;
  isDay: boolean;
}

// Weather code mappings from Open-Meteo
// 0: Clear sky
// 1-3: Mainly clear, partly cloudy, overcast
// 45-48: Fog
// 51-57: Drizzle
// 61-67: Rain
// 71-77: Snow
// 80-82: Rain showers
// 85-86: Snow showers
// 95-99: Thunderstorm

export const useWeatherTheme = (enabled: boolean = true) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { setTheme } = useTheme();

  useEffect(() => {
    if (!enabled) {
      setLoading(false);
      return;
    }

    const fetchWeather = async (latitude: number, longitude: number) => {
      try {
        // Using Open-Meteo API (free, no API key required)
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,is_day&timezone=auto`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        const weatherInfo: WeatherData = {
          temperature: data.current.temperature_2m,
          weatherCode: data.current.weather_code,
          isDay: data.current.is_day === 1,
        };

        setWeatherData(weatherInfo);
        applyWeatherTheme(weatherInfo);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
        // Fallback to light theme
        setTheme('light');
      }
    };

    const applyWeatherTheme = (weather: WeatherData) => {
      const { weatherCode, isDay } = weather;

      // Rain conditions (drizzle, rain, rain showers, thunderstorm)
      if (
        (weatherCode >= 51 && weatherCode <= 67) ||
        (weatherCode >= 80 && weatherCode <= 82) ||
        (weatherCode >= 95 && weatherCode <= 99)
      ) {
        setTheme('rain');
      }
      // Snow conditions
      else if (
        (weatherCode >= 71 && weatherCode <= 77) ||
        (weatherCode >= 85 && weatherCode <= 86)
      ) {
        setTheme('light'); // Snow theme (light mode shows snow)
      }
      // Clear or partly cloudy
      else if (weatherCode >= 0 && weatherCode <= 3) {
        if (isDay) {
          setTheme('light');
        } else {
          setTheme('dark'); // Night mode with string lights
        }
      }
      // Overcast, fog, or other conditions
      else {
        if (isDay) {
          setTheme('light');
        } else {
          setTheme('dark');
        }
      }
    };

    // Get user's location
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        (err) => {
          console.warn('Geolocation error:', err.message);
          setError('Location access denied');
          setLoading(false);
          // Fallback to light theme
          setTheme('light');
        }
      );
    } else {
      setError('Geolocation not supported');
      setLoading(false);
      setTheme('light');
    }
  }, [enabled, setTheme]);

  return { weatherData, loading, error };
};
