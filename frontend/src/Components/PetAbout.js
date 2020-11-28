import React from 'react';
import './style.css';
import AdoptMe from './AdoptMe'
import { faDog, faSyringe, faInfoCircle, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PetAbout = (petInfo) => {
    const [adoptMeBTN, setAdoptMeBTN] = React.useState("ADOPT ME!")
    return (
        <div className="about">
            <div className="bodyPet">
                <h1>{petInfo.name}</h1>
                <div className="petInfo">
                    <img src="https://picsum.photos/350/200" id="profileImage" alt={"Picture of " + petInfo.name}></img>
                    <div className="petInfoWords">
                        <p><FontAwesomeIcon icon={faDog} /> {petInfo.breed}</p>
                        <p><FontAwesomeIcon icon={faSyringe} /> {petInfo.status}</p>
                        <p><FontAwesomeIcon icon={faInfoCircle} /> {petInfo.gender}, {petInfo.yearsOld} years old</p>
                    </div>
                </div>
                <div>
                    <h1>Ut proverbia non nulla veriora sint quam vestra dogmata.</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vide, quantum, inquam, fallare, Torquate. Duo Reges: constructio interrete. Iam in altera philosophiae parte. Hic ambiguo ludimur. </p>

                    <p>Et quidem, inquit, vehementer errat; Erit enim mecum, si tecum erit. Hanc quoque iucunditatem, si vis, transfer in animum; </p>

                    <p>Negat enim summo bono afferre incrementum diem. Praeclare hoc quidem. Ille incendat? Frater et T. </p>

                    <p>Memini me adesse P. Idem iste, inquam, de voluptate quid sentit? Istam voluptatem, inquit, Epicurus ignorat? Nonne igitur tibi videntur, inquit, mala? Tibi hoc incredibile, quod beatissimum. </p>

                    <p>Age, inquies, ista parva sunt. Quid sequatur, quid repugnet, vident. Nihil sane. Tollenda est atque extrahenda radicitus. Primum quid tu dicis breve? Atqui reperies, inquit, in hoc quidem pertinacem; </p>

                    <p>Ea possunt paria non esse. At, si voluptas esset bonum, desideraret. Erat enim res aperta. Quod cum dixissent, ille contra. Nam Pyrrho, Aristo, Erillus iam diu abiecti. Omnis enim est natura diligens sui. </p>

                    <p>Nihil enim hoc differt. An vero, inquit, quisquam potest probare, quod perceptfum, quod. Illud dico, ea, quae dicat, praeclare inter se cohaerere. Nummus in Croesi divitiis obscuratur, pars est tamen divitiarum. </p>

                    <p>Id est enim, de quo quaerimus. Quae cum dixisset paulumque institisset, Quid est? Cur deinde Metrodori liberos commendas? Nescio quo modo praetervolavit oratio. Et quod est munus, quod opus sapientiae? Ad eos igitur converte te, quaeso. Haeret in salebra. Sint modo partes vitae beatae. </p>

                    <h2>Quid turpius quam sapientis vitam ex insipientium sermone pendere?</h2>

                    <p>Confecta res esset. Qui ita affectus, beatum esse numquam probabis; Praeclare hoc quidem. Sedulo, inquam, faciam. </p>

                    <h3>Id est enim, de quo quaerimus.</h3>

                    <p>Certe, nisi voluptatem tanti aestimaretis. Quid ergo attinet gloriose loqui, nisi constanter loquare? Tollenda est atque extrahenda radicitus. Prioris generis est docilitas, memoria; Summae mihi videtur inscitiae. </p>
                </div>
                <AdoptMe petInfo={petInfo} currentPets={petInfo.currentPets} updateAdoption={petInfo.updateAdoption} adoptMeBTN={adoptMeBTN} setAdoptMeBTN={setAdoptMeBTN}/>
            </div>
        </div>
    )
}

export default PetAbout;