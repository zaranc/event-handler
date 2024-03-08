import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cards = () => {
    const [data, setData] = useState([])
    const [viewData, setViewData] = useState() 

    let api = () => {
        axios.get("http://localhost:3001/product").then((res) => {
            setData(res.data);
        })
    }
    useEffect(() => {
        api();
    }, []);
    function view(id) {
        // let qwerty = data.filter((item) => item.id === id);
        // setViewData(qwerty);

        // // setViewData(data.filter((item) => item.id == id));
        // console.log(viewData);
        // {
        //     viewData.map((val, id) => {
        //         return (

        //             < >
        //                 <div class="modal fade" id="viewmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        //                     <div class="modal-dialog" role="document">
        //                         <div class="modal-content">
        //                             <div class="modal-header">
        //                                 <h5 class="modal-title" id="exampleModalLabel">{val.name}</h5>
        //                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        //                                     <span aria-hidden="true">&times;</span>
        //                                 </button>
        //                             </div>
        //                             <div class="modal-body">
        //                                 <div class="card" style={{ width: "100%" }}>
        //                                     <img class="card-img-top" src="https://5.imimg.com/data5/SELLER/Default/2021/2/PN/NU/PM/80481671/abalam-tablet.jpg" alt="Card image cap" />
        //                                     <div class="card-body">
        //                                         <h5 class="card-title">Card title</h5>
        //                                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div class="modal-footer">
        //                                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </>

        //         )
        //     })
        // }
    }
    return (
        <>
            <div className='row container'>
                {
                    data.map((val, ind) => {
                        return (
                            <>
                                <article class="card card--1 mt-4">
                                    <img src={val.img} alt="" />
                                    <div class="card__info">
                                        <span class="card__category">{val.name}</span>
                                        <h3 class="card__title">{val.price}</h3>
                                        <span class="card__by"><button class="btn btn-success" title="author" data-toggle="modal" data-target="#viewmodal" onClick={() => view(val.id)}>view</button></span>
                                    </div>
                                </article>
                            </>

                        )
                    })
                }
            </div>
        </>
    )


}

export default Cards