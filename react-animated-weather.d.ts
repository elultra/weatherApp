declare module 'react-animated-weather' {
      interface AnimatedWeatherProps {
        icon: string;
        color?: string;
        size?: number;
        animate?: boolean;
      }
    
      const ReactAnimatedWeather: React.FC<AnimatedWeatherProps>;
    
      export default ReactAnimatedWeather;
    }