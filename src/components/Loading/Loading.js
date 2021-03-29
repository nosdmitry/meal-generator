import './Loading.scss';
import chicken from './chickenLoading.svg';

function Loading() {
  return (
    <img className="loading" src={ chicken } alt="loading" />
  );
}

export default Loading;
