import {React, useState} from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 
const useStyles = (theme) => ({
    root: {
        maxWidth: 330,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        padding: 20,
        marginTop: 30
    }
});
const CreateApplicantForm = () => {
    const classes = useStyles();
    const [applicationList, setApplicationList] = useState(localStorage.getItem("applicantList") ? JSON.parse(localStorage.getItem("applicantList")) :[])
    const [applicationForm,setApplicationForm] = useState({
        jobCode:"",
        name:"",
        notes:"",
        technologies:[],
        noticePeriod:0,
        salary:""
    })
    function saveButtonClick() {
        try{
           console.log(applicationForm)
           setApplicationList(applicationList.push(applicationForm))
           localStorage.setItem("applicantList",JSON.stringify(applicationList))
           setTimeout(()=>{
            toast("Record saved successfully !",{
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
           },1000)
           setTimeout(()=>{window.location.reload();},2000)
        }catch(e){
            console.log(e)
        }
      }
    const handleTextInputChange = (event,field) => {
        try{
            switch(field){
                case 'name':
                    applicationForm.name = event.target.value;
                    break;
                    case 'jobCode':
                        applicationForm.jobCode = event.target.value;
                        break;
                        case 'noticePeriod':
                            applicationForm.noticePeriod = event.target.value;
                            break;
                            case 'salary':
                                applicationForm.salary = event.target.value;
                                break;
              default:
                  applicationForm.notes = event.target.value
                  break;
            }
        }catch(e){
            console.log(e)
        }
  };
    const getTechnologyList = [
        { title: 'Java' },
        { title: 'Python' },
        { title: 'React JS' },
        { title: 'React Native'},
        { title: 'Javascript' },
        { title: "Angular" },
        { title: 'Angular JS' },
        { title: 'Cypress'},
        { title: 'Docker' },
        { title: 'GO' },
        { title: 'C'},
        { title: 'Php' },
        { title: 'Wordpress' },
        { title: 'AWS'},
        { title: '.Net' },
        { title: 'SQL' },
        { title: 'MySQL'},
        { title: 'Oracle' },
        { title: 'GNode JS' },
       
    ];
    
    return(
        <div className={classes.root}>
            <form >
                <TextField label="Job Code" onChange= {(e)=>handleTextInputChange(e,'jobCode')} defaultValue={applicationForm.jobCode}  required /><br /><br />
                <TextField label="Name" onChange= {(e)=>handleTextInputChange(e,'name')} defaultValue={applicationForm.name} required /><br /><br />
                <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Notes"
                defaultValue={applicationForm.notes}
                style={{ width: 200 }}
                onChange= {(e)=>handleTextInputChange(e,'notes')}
                /><br /><br />
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={getTechnologyList}
                    onChange={(event, value) => applicationForm.technologies= value} 
                    getOptionLabel={(option) => option.title}
                    // defaultValue={[top100Films[13]]}
                    filterSelectedOptions
                    defaultValue={applicationForm.technologies}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Technologies"
                    />
                    )}
                />
                <TextField onChange= {(e)=>handleTextInputChange(e,'noticePeriod')} label="Notice Period" defaultValue={applicationForm.noticePeriod} required /><br /><br />
                <TextField onChange= {(e)=>handleTextInputChange(e,'salary')} label="- Salary Asked" defaultValue={applicationForm.salary} required /><br /><br />
                <img src="https://qrtag.net/api/qr_4.png?url=https://www.qrtag.net" alt="qrtag"></img>
                <Button 
                  variant="contained"
                  fullWidth
                  onClick={saveButtonClick}
                  color="primary">
                      Save
                </Button>
            </form>
        </div>
    );
};

export default CreateApplicantForm;