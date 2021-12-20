import React, {useState} from 'react'
import {doPost} from "../axiosP/servise";

export default function Communication() {
    const [users, setUsers] = useState('')

    const [phone, setPhone] = useState('')

    async function onSubmit(e) {
        e.preventDefault()
        postData({name: users, phone_number: phone})
    }

    async function postData(data) {
        await doPost(data)

    }

    return (
        <div id={'communicationId'}
             className='communication mt-5 my-5 d-flex justify-content-center align-items-center'>
            <div className='container '>

                <div className='row '>
                    <div className='col-md-7 text-white p-5'>
                        <h2>Остались вопросы?</h2>
                        <h1>Связаться с нами</h1>
                    </div>
                    <div className='col-md-5 my-3'>
                        <form className='form-group mt-4' onSubmit={onSubmit}>
                            <input className='my-2' onChange={(e) => setPhone(e.target.value)} value={phone} type="text"
                                   placeholder='Ваш номер'/>
                            <input className='my-2' onChange={(e) => setUsers(e.target.value)} value={users} type="text"
                                   placeholder='Ваше имя'/>
                            <button className='my-2' type="submit"> Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
