import AOS from 'aos/dist/aos';
import Navigation from './components/navigation';

AOS.init({
  offset: 100,
  duration: 400,
  easing: 'ease',
});

Navigation();
