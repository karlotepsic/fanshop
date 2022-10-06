import { useParams } from 'react-router';
import proizvodi from '../../assets/static/proizvodi';

const Proizvod = () => {
  const { imeProizvoda } = useParams();
  const proizvod = proizvodi.find((p) => p.ime === imeProizvoda);
  const euro = 7.53;

  return (
    <>
      <div className='detalji-proizvoda'>
        <img src={proizvod.slika} alt='' />
        <div>
          <h1>{proizvod.ime}</h1>
          <h3>
            {proizvod.cijena} kn ~ {Math.round((proizvod.cijena / euro) * 100) / 100} eu
          </h3>
          {proizvod.detalji}
        </div>
      </div>
    </>
  );
};

export default Proizvod;
