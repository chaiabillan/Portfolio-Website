import './Certifications.scss';
import { BrushFill, Backpack2, Tsunami, Hospital, Award } from 'react-bootstrap-icons';
import mentoring from '../../assets/images/Mentoring.svg';
import dragonboat from '../../assets/images/Designer (3).svg';
import family from '../../assets/images/family.png';


function Certifications() {

    return (
        <section className='research'>
            <Award className='research__icon research__icon--cert' />
            <p className='research__lab research__lab--cert'>
                TEFL
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