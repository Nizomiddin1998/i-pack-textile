import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanelComp from '../components/TabPanelComp';

function Product() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
        <div className={'container Product'} id='product'>
            <div className={'text-center titleFon my-5'}>
                <h3>Наши продукты</h3>
                <p><span> </span></p>
            </div>
            <div className="row">
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                           <div className='tab_list1'>
                           <TabList className='Tab_List' onChange={handleChange} aria-label="lab API tabs example">
                                 <Tab label="Гофракартон" value="1"
                                 className={`tab-btn  ${ value==='1'?'tab-btn-focus':''}`} />
                                 <Tab label="Полиэтилен пакеты" value="2"
                                 className={`tab-btn  ${ value==='2'?'tab-btn-focus':''}`} />
                                 <Tab label="Бумажные Конус" value="3"
                                 className={`tab-btn  ${ value==='3'?'tab-btn-focus':''}`} />
                                 <Tab label="Полипропилен мешки" value="4"
                                 className={`tab-btn  ${ value==='4'?'tab-btn-focus':''}`} />
                            </TabList>
                           </div>
                            <div className='tab_list'>
                            <TabList className='Tab_List' onChange={handleChange}
                            >
                                 <Tab label="Гофракартон" value="1"
                                 className={`tab-btn  ${ value==='1'?'tab-btn-focus':''}`} />
                                 <Tab label="Полиэтилен пакеты" value="2"
                                 className={`tab-btn ${ value==='2'?'tab-btn-focus':''}`} />

                            </TabList>
                            <TabList className='Tab_List' onChange={handleChange}>
                            <Tab label="Бумажные Конус" value="3"
                                 className={`tab-btn  ${ value==='3'?'tab-btn-focus':''}`} />
                                 <Tab label="Полипропилен мешки" value="4"
                                 className={`tab-btn  ${ value==='4'?'tab-btn-focus':''}`} />
                            </TabList>
                            </div>
                            <div className='tab_list2'>
                            <TabList className='mt-2 ' onChange={handleChange}
                            >
                                 <Tab label="Гофракартон" value="1"
                                 className={`tab-btn  ${ value==='1'?'tab-btn-focus':''}`} />

                            </TabList>
                            <TabList className='mt-2 ' onChange={handleChange}
                            >
                                 <Tab label="Полиэтилен пакеты" value="2"
                                 className={`tab-btn  ${ value==='2'?'tab-btn-focus':''}`} />

                            </TabList>
                            <TabList className='mt-2 ' onChange={handleChange}>
                            <Tab label="Бумажные Конус" value="3"
                                 className={`tab-btn  ${ value==='3'?'tab-btn-focus':''}`} />
                            </TabList>
                            <TabList className='mt-2' onChange={handleChange}>
                                 <Tab label="Полипропилен мешки" value="4"
                                 className={`tab-btn  ${ value==='4'?'tab-btn-focus':''}`} />
                            </TabList>
                            </div>
                        </Box>
                        <TabPanelComp />
                    </TabContext>
                </Box>
            </div>
        </div>
    );
}

export default Product;