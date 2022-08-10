import './SharkNinjaForm.css';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import data from './stackline_frontend_assessment_data_2021.json';
function SharkNinjaForm() {
    return (
        <form className='ninja-form'>
             <img className='shark-ninja-img' alt="" src={data[0].image}/>
             <div className='title-descriptions'>

                <h1>{data[0].title}</h1>
                <p>
                    {data[0].subtitle}
                </p>
             </div>
                 <Stack className='shark-ninja-chips' direction="row" spacing={1}>
                    {
                        data[0].tags.map((row) => {

                            return <Chip key={ Math.random().toString(16).slice(2)} label={row} variant="outlined" />
                        }
                        )
                    }
                </Stack>
         </form>
    );
}

export default SharkNinjaForm;
