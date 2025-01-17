import { useQuery } from '@apollo/client';  // We bring in the Hook to request data
import {  QUERY_ALL_RAFFLES } from '../../utils/queries';   // WE bring in the reference for the QUERY to the backend (API)

import CardStock from '../CardStock';
import {Grid} from '@mui/material';

function CardContainer() {
    // react makes a call for DATA (from cache, DB)  --> look into HOOKS Apollo HOOK
    const { loading, data } = useQuery(QUERY_ALL_RAFFLES);
    
    //console.log(data);
    //let raffles = data.raffles;
    // [{title: "Cucumber", description: "Sweet Savory Cucumber", image: img1 }, 
    // {title: "Shrek Beard", description: "Shrek Beard portrait with matching fedora", image: img2 }, 
    // {title: "Payday loan", description: "Payday loan ranging from $5-500", image: img3}, 
    // {title: "Angry Cat", description: "Angry fluffy cat", image: img4}, 
    // {title: "Quarter", description: "Shiny new quarter", image: img5},
    // {title: "Swan Yacht", description: "Mega swan yacht", image: img6},
    // {title: "Spork", description: "Titanium spork", image: img7},
    // {title: "Bully Maguire ornament", description: "Festive Bully Maguire Christmas ornament", image: img8}]; // --> Think of this as STATE

    

    // This will query the API (backend) Database for Data
    // remember this is an async process
    // console.log(data);  // this will be 'undefined' UNTIL loading completes and puts the info into 'data'
    //const userData = data?.me || []; Unitl we get data loaded into 'data' we initialize an empty array []
    // console.log(userData);

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            { data && data.raffles && data.raffles.map( (item) => (
                <Grid item xs={3}>
                    <CardStock data = {item}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default CardContainer;
