import './Certifications.scss';
import { Award } from 'react-bootstrap-icons';


function Certifications() {

    return (
        <section className='research'>
            <Award className='research__icon research__icon--cert' />
            <p className='research__lab research__lab--cert'>
                Teaching English as a Foreign Language (TEFL)
            </p>
            <Award className='research__icon research__icon--cert' />
            <p className='research__lab research__lab--cert'>
                CPR-C/AED Emergency First Aid
            </p>
            <Award className='research__icon research__icon--cert' />
            <p className='research__lab research__lab--cert'>
                Undergraduate Research Opportunities Research Experience (REX) program
            </p>
            <Award className='research__icon research__icon--cert' />
            <p className='research__lab research__lab--cert'>
                Tri-Council Policy Statement (TCPS 2)
            </p>
            <Award className='research__icon research__icon--cert' />
            <p className='research__lab research__lab--cert'>
                Food Safe 1
            </p>
        </section>
    )
}

export default Certifications