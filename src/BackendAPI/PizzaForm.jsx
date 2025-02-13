import React, {useState} from 'react';
import axios, {put} from "axios";
import "./Pizza.css";

const PizzaForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleAddPizza = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('imagePath', image);

        axios.post('/api/pizzas', formData, {headers: {'Content-Type': 'multipart/form-data'}})
            .then((res) => {
                console.log(res.data);
                alert('피자가 추가되었습니다.');
                setName('');
                setPrice('');
                setDescription('');
                setImage(null);
            })
            .catch(() => {
                alert('피자 추가에 실패했습니다.');
            });
    }

    return (
        <div className={"pizza-form"}>
            <h1>피자 추가하기</h1>

            <label htmlFor="name">피자 이름</label>
            <input type="text" id="name" name="name" placeholder="피자 이름" value={name}
                   onChange={(e) => setName(e.target.value)}/>

            <label htmlFor="price">피자 가격</label>
            <input type="number" id="price" name="price" placeholder="피자 가격" value={price}
                   onChange={(e) => setPrice(e.target.value)}/>

            <label htmlFor="description">피자 설명</label>
            <textarea id="description" name="description" placeholder="피자 설명" value={description}
                      onChange={(e) => setDescription(e.target.value)}/>
            <label htmlFor="image">피자 이미지</label>
            <input type="file" id="image" name="image" value={image}
                   onChange={(e) => setImage(e.target.value[0])}/>
            {/* value[0] 사용하는 이유 : 사진이 여러 장 인 경우를 고려해 항상 첫번째를 가져오도록  */}

            <button type="button" onClick={handleAddPizza}>피자 추가하기</button>
        </div>
    )
}

export default PizzaForm;