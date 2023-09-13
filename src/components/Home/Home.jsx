/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css'


const Home = () => {
    const [allActors, setAllActors] = useState([]);
    const [selectedActor, setSelectedActor] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const totalBudget = 20000;

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllActors(data))
    }, [])
    // console.log(allActors);

    const handleSelectActor = (actor) => {
        // console.log(actor);
        const isExist = selectedActor.find(item => item.id === actor.id);
        let cost = actor.salary;

        if (isExist) {
            return alert('Already Booked');
        }
        else {

            selectedActor.forEach(item => {
                cost = cost + item.salary;
            })

            let totalRemaining = totalBudget - cost;

            if(cost > totalBudget){
                return alert('Budget finished')
            }
            else{
                setTotalCost(cost);
                setRemaining(totalRemaining);
                const newSelectedActor = [...selectedActor, actor];
                setSelectedActor(newSelectedActor);
            }
        }
    }
    // console.log(selectedActor);

    return (
        <div className='container'>
            <div className="home-container">
                <div className="card-container">
                    {
                        allActors.map((actor) => (
                            <div key={actor.id} className="card">
                                <div className="card-img">
                                    <img
                                        className="photo"
                                        src={actor.image}
                                        alt=""
                                    />
                                </div>
                                <h2>{actor.name}</h2>
                                <p>
                                    <small>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non dolor commodi doloremque vel? Fugiat non aliquam iste quibusdam fuga voluptates?
                                    </small>
                                </p>
                                <div className="info">
                                    <p>salary: {actor.salary}</p>
                                    <p>{actor.role}</p>
                                </div>
                                <button
                                    onClick={() => handleSelectActor(actor)} className='card-btn'>Select</button>
                            </div>
                        ))}
                </div>

                <div className="cart">
                    <Cart 
                    selectedActor={selectedActor}
                    remaining={remaining}
                    totalCost={totalCost}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;