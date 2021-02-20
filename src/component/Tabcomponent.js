import React ,{useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Tabdoor from '../component/tabs_nav/tabDoor';
import Tabcomputer from '../component/tabs_nav/tabcomputer';
import Tabprice from '../component/tabs_nav/tabprice';
import Tabdoorcontent from './tabdoorcontent';
import Tabcomputercontent from './tabcomputercontent';
import Tabpricecontent from './tabpricecontent';

import '../css/tabnav.css'
const Tabcomponent = () => {
    const [tabindex,setTabindex] = useState(0)
    return (
        <div> 
            <Tabs className="tab-data" selectedIndex={tabindex} onSelect={tabindex=>setTabindex(tabindex)}>
                <TabList className="tab-row">
                    <Tab className={`${tabindex===0 ? 'active':null}`}>
                        <Tabdoor   />
                    <p style={{marginTop:'5px'}}>
                       <strong>No </strong> 
                     </p>
                    </Tab>
                    <Tab className={`${tabindex===1 ? 'active':null}`}>
                        <Tabcomputer/>
                        <p style={{marginTop:'15px'}}>
                       <strong>Watch Anywhere</strong> 
                     </p>
                        
                        </Tab>
                        <Tab className={`${tabindex===2 ? 'active':null}`}>
                            <Tabprice/>
                        <p style={{marginTop:'15px'}}>
                       <strong>Pick your Price</strong> 
                     </p>
                    
                        </Tab>
                </TabList>
                <TabPanel>
                    <Tabdoorcontent/>
               </TabPanel>
               
                <TabPanel>
                <Tabcomputercontent/>
                </TabPanel>
                <TabPanel>
                <Tabpricecontent/>
                </TabPanel>
                
                
            </Tabs>
        </div>
    )
}

export default Tabcomponent
 