import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import apiBaseUrl from '../../apiConfig'

const FormAddErga = () => {
    const[name,setName]=useState("");
    const[sign_ammount_no_tax,setSignAmmountNoTax]=useState("");
    const[sign_date,setSignDate]=useState("");
    const[status,setStatus]=useState("");
    const[estimate_start_date,setEstimateStartDate]=useState("");
    const[project_manager,setProjectManager]=useState("")
    const[customer_id,setCustomerId]=useState("")
    const[shortname,setShortName]=useState("")
    const[ammount,setAmmount]=useState("")
    const[ammount_vat,setAmmount_Vat]=useState("")
    const[ammount_total,setAmmount_Total]=useState("")
    const[estimate_payment_date,setEstimate_Payment_Date]=useState("")
    const[estimate_payment_date_2,setEstimate_Payment_Date_2]=useState("")
    const[estimate_payment_date_3,setEstimate_Payment_Date_3]=useState("")
    const[msg,setMsg]=useState("");


    const navigate = useNavigate();

    const saveErgo = async (e) =>{
        e.preventDefault();
        try{
            await axios.post(`${apiBaseUrl}/erga`, {
            name:name,
            sign_ammount_no_tax:sign_ammount_no_tax,
            sign_date:sign_date,
            status:status,
            estimate_start_date:estimate_start_date,
            project_manager:project_manager,
            customer_id:customer_id,
            shortname: shortname,
            ammount: ammount,
            ammount_vat: ammount_vat,
            ammount_total: ammount_total,
            estimate_payment_date: estimate_payment_date,
            estimate_payment_date_2: estimate_payment_date_2,
            estimate_payment_date_3: estimate_payment_date_3
            });
            navigate("/erga");
        }catch(error){
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }

  return (
    <div>
        <h1 className='title'>Προσθήκη Έργου</h1>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                <form onSubmit={saveErgo}>
                <p className='has-text-centered'>{msg}</p>
                <div className="field">
                        <label  className="label">ΟΝΟΜΑ ΕΡΓΟΥ</label>
                        <div className="control">
                            <input type="text" className="input" value={name} onChange={(e)=> setName(e.target.value)} placeholder='ΟΝΟΜΑ ΕΡΓΟΥ'/>
                        </div>
                    </div>
                    <div className="field">
                        <label  className="label"> ΠΟΣΟ ΣΥΜΒΑΣΗΣ (€) ΧΩΡΙΣ Φ.Π.Α.</label>
                        <div className="control">
                            <input type="text" className="input" value={sign_ammount_no_tax} onChange={(e)=> setSignAmmountNoTax(e.target.value)} placeholder='ΠΟΣΟ ΣΥΜΒΑΣΗΣ (€) ΧΩΡΙΣ Φ.Π.Α.'/>
                        </div>
                    </div>

                    <div className="field">
                        <label  className="label">ΗΜΕΡΟΜΗΝΙΑ ΥΠΟΓΡΑΦΗΣ ΣΥΜΒΑΣΗΣ</label>
                        <div className="control">
                            <input type="date" className="input" value={sign_date} onChange={(e)=> setSignDate(e.target.value)} placeholder='ΗΜΕΡΟΜΗΝΙΑ ΥΠΟΓΡΑΦΗΣ ΣΥΜΒΑΣΗΣ'/>
                        </div>
                    </div>
                    <div className="field">
                        <label  className="label">ΚΑΤΑΣΤΑΣΗ ΕΡΓΟΥ</label>
                        <div className="control">
                            <input type="text" className="input" value={status} onChange={(e)=> setStatus(e.target.value)} placeholder='ΚΑΤΑΣΤΑΣΗ ΕΡΓΟΥ'/>
                        </div>
                    </div>
                    <div className="field">
                        <label  className="label">ΗΜΕΡΟΜΗΝΙΑ ΕΝΑΡΞΗΣ(εκτίμηση)</label>
                        <div className="control">
                            <input type="date" className="input" value={estimate_start_date} onChange={(e)=> setEstimateStartDate(e.target.value)} placeholder='ΗΜΕΡΟΜΗΝΙΑ ΕΝΑΡΞΗΣ(εκτίμηση)'/>
                        </div>
                    </div>

                    <div className="field">
                        <label  className="label">PROJECT MANAGER</label>
                        <div className="control">
                            <input type="text" className="input" value={project_manager} onChange={(e)=> setProjectManager(e.target.value)} placeholder='PROJECT MANAGER'/>
                        </div>
                    </div>

                    <div className="field">
                        <label  className="label">ID ΠΕΛΑΤΗ</label>
                        <div className="control">
                            <input type="text" className="input" value={customer_id} onChange={(e)=> setCustomerId(e.target.value)} placeholder='ID ΠΕΛΑΤΗ'/>
                        </div>
                    </div>

                    <div className="field">
                        <label  className="label">ΣΥΝΤΟΜΟΓΡΑΦΙΑ</label>
                        <div className="control">
                            <input type="text" className="input" value={shortname} onChange={(e)=> setShortName(e.target.value)} placeholder='SHORTNAME'/>
                        </div>
                    </div>

                    <div className="field">
                        <label  className="label">ΠΟΣΟ ΧΩΡΙΣ ΦΠΑ</label>
                        <div className="control">
                            <input type="text" className="input" value={ammount} onChange={(e)=> setAmmount(e.target.value)} placeholder='ΠΟΣΟ ΧΩΡΙΣ ΦΠΑ'/>
                        </div>
                    </div>

                    <div className="field">
                        <label  className="label">ΠΟΣΟ ΦΠΑ</label>
                        <div className="control">
                            <input type="text" className="input" value={ammount_vat} onChange={(e)=> setAmmount_Vat(e.target.value)} placeholder='ΠΟΣΟ ΦΠΑ'/>
                        </div>
                    </div>

                    <div className="field">
                        <label  className="label">ΠΟΣΟ ΣΥΝΟΛΙΚΟ</label>
                        <div className="control">
                            <input type="text" className="input" value={ammount_total} onChange={(e)=> setAmmount_Total(e.target.value)} placeholder='ΠΟΣΟ ΣΥΝΟΛΙΚΟ'/>
                        </div>
                    </div>

                    <div className="field">
                        <label  className="label">ΠΡΟΒΛΕΠΟΜΕΝΗ ΗΜΕΡΟΜΗΝΙΑ ΠΛΗΡΩΜΗΣ 1</label>
                        <div className="control">
                            <input type="date" className="input" value={estimate_payment_date} onChange={(e)=> setEstimate_Payment_Date(e.target.value)} placeholder='ΠΡΟΒΛΕΠΟΜΕΝΗ ΗΜΕΡΟΜΗΝΙΑ ΠΛΗΡΩΜΗΣ 1'/>
                        </div>
                    </div>

                    <div className="field">
                        <label  className="label">ΠΡΟΒΛΕΠΟΜΕΝΗ ΗΜΕΡΟΜΗΝΙΑ ΠΛΗΡΩΜΗΣ 2</label>
                        <div className="control">
                            <input type="date" className="input" value={estimate_payment_date_2} onChange={(e)=> setEstimate_Payment_Date_2(e.target.value)} placeholder='ΠΡΟΒΛΕΠΟΜΕΝΗ ΗΜΕΡΟΜΗΝΙΑ ΠΛΗΡΩΜΗΣ 2'/>
                        </div>
                    </div>

                    <div className="field">
                        <label  className="label">ΠΡΟΒΛΕΠΟΜΕΝΗ ΗΜΕΡΟΜΗΝΙΑ ΠΛΗΡΩΜΗΣ 3</label>
                        <div className="control">
                            <input type="date" className="input" value={estimate_payment_date_3} onChange={(e)=> setEstimate_Payment_Date_3(e.target.value)} placeholder='ΠΡΟΒΛΕΠΟΜΕΝΗ ΗΜΕΡΟΜΗΝΙΑ ΠΛΗΡΩΜΗΣ 3'/>
                        </div>
                    </div>
                    
                    
                    <div className="field">
                        <div className="control">
                            <button type="submit" className="button is-success is-fullwidth">Προσθήκη</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormAddErga