import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import apiBaseUrl from '../../apiConfig'
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const FormEditDaneia= () => {
    const [name, setName] = useState("");
    const [ammount, setAmmount] = useState("");
    const [status, setStatus] = useState("");
    const [payment_date, setPayment_Date] = useState("")
    const[msg,setMsg]=useState("");

    const navigate = useNavigate();

    const{id} = useParams();

    const formatDateToInput = (dateString) => {
        if(dateString === null || dateString =="" || dateString === NaN){
            return ""
        }
        dateString=dateString.split('T')[0];
        const [year, month, day] = dateString.split('-');
        return `${year}-${month}-${day}`;
    };

    useEffect(()=>{
        const getDaneiaById = async()=>{
            const response=await axios.get(`${apiBaseUrl}/daneia/${id}`);
            try
            {
                const response=await axios.get(`${apiBaseUrl}/daneia/${id}`);
                setName(response.data.name);
                setAmmount(response.data.ammount);
                setStatus(response.data.status);
                setPayment_Date(formatDateToInput(response.data.payment_date))
            }
            catch(error)
            {
                if(error.response){
                    setMsg(error.response.data.msg);
                }
            }
        };
        getDaneiaById();
    }, [id]);

    const updateDaneio = async(e) =>{
        e.preventDefault();
        try{
            await axios.patch(`${apiBaseUrl}/daneia/${id}`, {
                name:name,
                ammount:ammount,
                status:status,
                payment_date:payment_date,
            });

            navigate("/daneia");
        }
        catch(error){
            if(error.response){
                setMsg(error.response.data.msg);
                }
        }
    };
    return(
        <div>
        <h1 className='title'>Διαχείριση Δόσεων</h1>
        <h2 className='subtitle'>Επεξεργασία Δόσεις</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                <form onSubmit={updateDaneio}>
                    <p className='has-text-centered'>{msg}</p>

                    <div className="field">
                    <label htmlFor="percentage">Ονομα Δανείου</label>
                    <div className="control">

                    <InputText  id="name" className="input"  value={name}  onChange={(e)=> setName(e.value)}/>
             </div>
                </div>
                    <div className="field">
                    <label htmlFor="percentage">Ποσό Δανείου</label>
                    <div className="control">

                    <InputNumber  id="ammount" className="input" mode="decimal" minFractionDigits={2} value={ammount}  onChange={(e)=> setAmmount(e.value)}/>
             </div>
                </div>


                <div className="field">
                    <label htmlFor="estimate_payment_date">ΕΚΤΙΜΩΜΕΝΗ ΗΜΕΡΟΜΗΝΙΑ ΠΛΗΡΩΜΗΣ ΔΑΝΕΙΟΥ</label>
                    <div className="control">

                    <Calendar id="estimate_payment_date"  value={new Date(payment_date)} onChange={(e)=> setPayment_Date(e.target.value)}  inline showWeek />
                    </div>
                
                    </div>

                    <div className="field">
                    <label htmlFor="status">Kατάσταση Δανείου</label>
                    <div className="control">

                    <InputText id="status" type="text" value={status} onChange={(e)=> setStatus(e.target.value)} />
                    </div>
                </div>

                <div className="field">
                            <div className="control">
                                <Button type="submit" className="button is-success is-fullwidth">Ενημέρωση</Button>
                            </div>
                        </div>
                    
                 
                </form>
                </div>
            </div>
        </div>
    </div>

            

    )
}

export default FormEditDaneia