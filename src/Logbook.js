import React from 'react'
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row,
    Table,
    CardFooter,
} from 'reactstrap';
import PropTypes from 'prop-types'
import Particles from 'react-particles-js'
import Axios from 'axios'
import './index.css'


const particleOpt = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 500
        }
      }
    }
  }



class Logbook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            distUsers: [],
            cmbUsers: [],
            koliOpt: [],
            logDate: [],
            searchRes: [],

            //ScanNomorKoli
            inputNoKoli: '',

            //ScanNomorPL
            inputNoPL: '',

            //InputSearch
            inputSearch: '',

           modalDetailPLIsOpen: false,
           modalBeratTimbang: false,

        }
       
    }

    componentDidMount() {
        this.pilihDist();
        this.pilihCMBDist();
        this.jenisKoli();
        this.dateLog();
        this.searchLog();
    }

    pilihDist = () => {
        var url = ''
        Axios.get(url)
        .then((response) => {
            if (response.data.data) {
                this.setState({
                    distUsers: response.data.data
                })
            }
        }
           
        )
    }

    pilihCMBDist = () => {
        var url = ''
        Axios.get(url)
        .then((response) => {
            if (response.data.data) {
                this.setState({
                    cmbUsers: response.data.data
                })
            }
        }
           
        )
    }

    jenisKoli = () => {
        var url = ''
        Axios.get(url)
        .then((response) => {
            if (response.data.data) {
                this.setState({
                    koliOpt: response.data.data
                })
            }
        }
           
        )
    }

    dateLog = () => {
        var url = ''
        Axios.get(url)
        .then((response) => {
            if (response.data.data) {
                this.setState({
                    logDate: response.data.data
                })
            }
        }
           
        )
    }

    searchLog = () => {
        var url = ''
        Axios.get(url)
        .then((response) => {
            if (response.data.data) {
                this.setState({
                    searchRes: response.data.data
                })
            }
        }
           
        )
    }

    scanNomorKoli = () => {
        var url = ''
        var body = {
            noKoli: this.state.inputNoKoli,
        }

        Axios.post(url, body)
        .then(() => {
            this.scanNomorKoli();
            console.log('Masuk No Koli')
        })
        .catch(error => {
            console.log('ErrorMsg: ' + error.message)
        })
    }

    scanNomorPL = () => {
        var url = ''
        var body = {
            noPL: this.state.inputNoPL,
        }

        Axios.post(url, body)
        .then(() => {
            this.scanNomorPL();
            console.log('Masuk No PL')
        })
        .catch(error => {
            console.log('ErrorMsg: ' + error.message)
        })
    }

    search = () => {
        var url = ''
        var body = {
            search: this.state.inputSearch,
        }

        Axios.post(url, body)
        .then(() => {
            this.search();
            console.log('Masuk')
        })
        .catch(error => {
            console.log('ErrorMsg: ' + error.message)
        })
    }

    onScanKoliInputTextChange = (inputName, event) => {
        const value = event.target.value;

        this.setState({
            ['inputNoKoli' + inputName]: value
        });
    }

    onScanPLInputTextChange = (inputName, event) => {
        const value = event.target.value;

        this.setState({
            ['inputNoPL' + inputName]: value
        });
    }

    onScanPLInputEnterPressed = (event) => {
        var code = event.keyCode || event.which;
        if (code === 13) {
            event.preventDefault();
            // Function To Do
            this.toggleBeratTambangModal()
        }
    }

    onSearchInputTextChange = (inputName, event) => {
        const value = event.target.value;

        this.setState({
            ['inputSearch' + inputName]: value
        });
    }

    toggleDetailPLModal = () => {
        this.setState({
            modalDetailPLIsOpen:!this.state.modalDetailPLIsOpen
        })
    }


    toggleBeratTambangModal = () => {
        this.setState({
            modalBeratTimbang:!this.state.modalBeratTimbang
        })
    }

   



    render() {
        const {
            props, users
        } = this.state

        return (
                <div>
                    <Particles className='d-flex justify-content-center' 
                    params={particleOpt}
                    width='1920px'
                    height='120px'
                    />
                    <Card className>
                     <CardHeader size='lg'>
                         <Label size='lg' className='d-flex justify-content-center'>Logbook</Label>     
                     </CardHeader>

                     <CardBody>
                         <Form>
                             <Table>
                                 <thead>
                                     <tr></tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                         <td>Pilih DIST:
                                         </td>

                                    <td>
                                        <Input type='select'>
                                            <option>Select Your Option</option>
                                            <option>1</option>
                                        </Input>
                                    </td>
                                    </tr>

                                     <tr>
                                     <td>Pilih CAB DIST:</td>
                                     <td>
                                        <Input type='select'>
                                        <option>Select Your Option For CMB DIST</option>
                                        <option>1</option>
                                        </Input>
                                     </td>
                                     </tr>

                                    <tr>
                                     <td>Jenis Koli:</td>
                                     <td>
                                        <Input type='select'>
                                        <option>Select Your Option</option>
                                        <option>1</option>
                                        </Input>
                                     </td>
                                    </tr>

                                    <tr>
                                     <td>Scan Nomor Koli:</td>
                                     <td>
                                        <Input placeholder='Nomor Koli' value={this.state.scanNomorKoli} onInput={(event) => this.onScanKoliInputTextChange('scanNomorKoli', event)}>
                                        </Input>
                                     </td>
                                     <td><Button color='primary'>Change Koli</Button></td>
                                    </tr>

                                    <tr>
                                     <td>Scan Nomor PL:</td>
                                     <td>
                                        <Input placeholder='Nomor PL' value={this.state.scanNomorPL} onInput={(event) => this.onScanPLInputTextChange('scanNomorPL', event)} onKeyPress={(event) => this.onScanPLInputEnterPressed(event)}>
                                        </Input>
                                     </td>
                                     <td><Button color='primary' onClick={() => this.toggleDetailPLModal()}>Detail PL</Button></td>
                                    </tr>

                                    <tr>
                                     <td>Tanggal:</td>
                                     <td>
                                        <Input type='select'>
                                        <option>16 - 03 - 2020</option>
                                        </Input>
                                     </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <Input type='checkbox' className='ml-1'/>
                                            <Label className='ml-4'>Search</Label>
                                        </td>
                                        <td>
                                            <Input type='select'>Search Here</Input>
                                            <Input value={this.state.searchRes} onInput={(event) => this.onSearchInputTextChange('searchRes')}/>
                                        </td>
                                    </tr>
                                 </tbody>
                             </Table>
                             <hr color='red'/>
                            <Table striped bordered hover variant="dark" size='sm'>
                                <thead>
                                <tr>
                                <th>#</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              
                               
                                    <tr>
                                        <td>1</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        
                                        <td align='center'>
                                            <Button size= 'sm' color= 'warning' style={{ marginRight:'1%' }}>Edit</Button>
                                            <Button size= 'sm' color= 'danger'style={{ marginLeft:'1%' }}>Delete</Button>                                            
                                            </td>
                                    </tr>
                                      
                            

                              </tbody>
                            </Table>
                         </Form>    
                     </CardBody>
                     <CardFooter className='d-flex justify-content-center'>
                        <Button color='primary'>Add</Button>
                        <Button className='ml-5' color='primary'>Save</Button>
                        <Button className='ml-5' color='secondary'>Print</Button>
                        <Button className='ml-5' color='secondary'>Print Label</Button>
                        <Button className='ml-5' color='warning'>Cancel</Button>
                     </CardFooter>
                 </Card>

                 {/*Modal Detail PL */}

                 <Modal centered
                    isOpen={this.state.modalDetailPLIsOpen} size='lg'>
                    <ModalHeader><h3>Input Berat Real</h3></ModalHeader>
                    <ModalBody className='m-3'>
                        <Form>
                            <FormGroup>
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            <th>No PL</th>
                                            <th>Tanggal PL</th>
                                            <th>No DO</th>
                                            <th>No Coli</th>
                                            <th>Berat PL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#####</td>
                                            <td>#####</td>
                                            <td>#####</td>
                                            <td>#####</td>
                                            <td>#####</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </FormGroup>
                            <FormGroup>
                                <Table>
                                    <tbody>
                                        
                                        <tr>
                                        <td><Label>Total PL</Label></td>
                                        <td><Input placeholder='Total PL'></Input></td>
                                        </tr>

                                        <tr>
                                        <td><Label>Total Procode</Label></td>
                                        <td><Input placeholder='Total Procode'></Input></td>
                                        </tr>

                                        <tr>
                                        <td><Label>Total Berat</Label></td>
                                        <td><Input placeholder='Total Berat'></Input></td>
                                        </tr>

                                        <tr>
                                        <td><Label>Total Berat Real</Label></td>
                                        <td><Input placeholder='Total Berat Real'></Input></td>
                                        </tr>
   
                                    </tbody>
                                 
                                </Table>
                            </FormGroup>
                    <ModalFooter>
                             

                            <Button color='success' className='mr-2'>OK</Button>
                            <Button color= 'danger' onClick={() => this.toggleDetailPLModal()}>Cancel</Button>
                    </ModalFooter>
                        </Form>
                    </ModalBody>
                 </Modal>

            
                {/*Modal Enter Input Scan No PL*/}
                 <Modal centered size='sm'
                 isOpen={this.state.modalBeratTimbang}>
                    <ModalHeader><h3>Input Berat Timbang</h3></ModalHeader>
                    <ModalBody>
                        <Form>
                            <Input placeholder='Berat Timbang'></Input>
                            <Button color='danger' onClick={() => this.toggleBeratTambangModal()} className='mt-2'>Cancel</Button>
                        </Form>
                    </ModalBody>
                 </Modal>
                </div>

        )
    }
}

Logbook.propTypes = {

}

export default Logbook

