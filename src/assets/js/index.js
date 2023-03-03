import AOS from 'aos/dist/aos';
import Navigation from './components/navigation';

AOS.init({
  offset: 200,
  duration: 400,
  easing: 'ease-in-out',
});

Navigation();
