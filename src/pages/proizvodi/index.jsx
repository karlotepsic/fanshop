import { useNavigate } from 'react-router';
import proizvodi from '../../assets/static/proizvodi';

const euro = 7.53;

const Proizvodi = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Proizvodi</h1>
      <div className='proizvodi'>
        {proizvodi.map((proizvod) => (
          <div
            className='proizvod'
            onClick={() => navigate(`/proizvodi/${proizvod.ime}`)}
          >
            <div className='slika-proizvoda'>
              <img src={proizvod.slika} />
            </div>
            <strong className='ime-proizvoda'>{proizvod.ime}</strong>
            <p>{proizvod.opis}</p>
            <strong className='cijena-proizvoda'>
              {proizvod.cijena} kn ~ {Math.round((proizvod.cijena / euro) * 100) / 100} eu
            </strong>
          </div>
        ))}
      </div>
    </>
  );
};

export default Proizvodi;
