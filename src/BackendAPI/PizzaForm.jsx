import React, {useState} from 'react';
import "./Pizza.css";
import axios from "axios";

/*
PizzaFormChapOne :
<input> 태그를 사용하여 피자 이름, 가격, 설명을 입력받고, onChange = (e) => {handleChangeValue} 를 사용하여 데이터를 업데이트

PizzaFormChapTwo :
<input> 태그를 사용하여 피자 이름, 가격, 설명을 입력받고, onChange = (e) => {setData(e.target.value)} 를 사용하여 데이터를 업데이트

 */

const PizzaForm = () => {
    return (
        // <PizzaFormChapOne/>
        <PizzaFormChapTwo/>
    )
}

const PizzaFormChapOne = () => {
    const [pizzaName, setPizzaName] = useState('');
    const [pizzaPrice, setPizzaPrice] = useState('');
    const [pizzaDescription, setPizzaDescription] = useState('');
    const [pizzaImage, setPizzaImage] = useState(null);

    const handleChangeValue = (e) => {
    if (!pizzaName || !pizzaPrice || !pizzaDescription) {

        let msg = '필수 입력 : \n';
        if (!pizzaName) msg += '피자 이름을 입력하세요.\n';
        if (!pizzaPrice) msg += '피자 가격을 입력하세요.\n';
        if (!pizzaDescription) msg += '피자 설명을 입력하세요.\n';

        alert(msg);
        return; // return을 사용하여 함수를 종료시키는 이유 : 모든 항목을 입력하지 않았을 때 다음 코드가 실행되지 않도록 하기 위함
    }

        const {name, value} = e.target;

        if (name === 'pizzaName') {
            setPizzaName(value);
        } else if (name === 'pizzaPrice') {
            setPizzaPrice(value);
        } else if (name === 'pizzaDescription') {
            setPizzaDescription(value);
        }
    }

    return (
        <div className={"pizza-form"}>
            <h1>피자 추가하기</h1>

            {/* value는 add 시 필수 X 값을 비워주는 용도로 사용 */}
            <label htmlFor="pizzaName">피자 이름</label>
            <input type="text" id="pizzaName" name="pizzaName" placeholder="피자 이름" value={pizzaName}
                   onChange={handleChangeValue}/>

            <label htmlFor="pizzaPrice">피자 가격</label>
            <input type="number" id="pizzaPrice" name="pizzaPrice" placeholder="피자 가격" value={pizzaPrice}
                   onChange={handleChangeValue}/>

            <label htmlFor="pizzaDescription">피자 설명</label>
            <textarea id="pizzaDescription" name="pizzaDescription" placeholder="피자 설명" value={pizzaDescription}
                      onChange={handleChangeValue}/>

            <button type="button" onClick={handleChangeValue}>피자 추가하기</button>
        </div>
    )
}

const PizzaFormChapTwo = () => {

    const [pizzaName, setPizzaName] = useState('');
    const [pizzaPrice, setPizzaPrice] = useState('');
    const [pizzaDescription, setPizzaDescription] = useState('');
    const [pizzaImage, setPizzaImage] = useState(null);

    // formdata 사용하는 이유 : 이미지 파일을 서버로 전송하기 위해 formdata를 사용
    const handleAddPizza = () => {
        const formData = new FormData();
        // formData.append('DB에 저장된 이름', 사용자가 입력한 값이 담긴 변수명);
        formData.append('name', pizzaName);
        formData.append('price', pizzaPrice);
        formData.append('description', pizzaDescription);
        formData.append('imagePath', pizzaImage);

        if (!pizzaName || !pizzaPrice || !pizzaDescription) {
            let msg = '필수 입력 : \n';
            if (!pizzaName) msg += '피자 이름을 입력하세요.\n';
            if (!pizzaPrice) msg += '피자 가격을 입력하세요.\n';
            if (!pizzaDescription) msg += '피자 설명을 입력하세요.\n';

            alert(msg);
            return; // return을 사용하여 함수를 종료시키는 이유 : 모든 항목을 입력하지 않았을 때 다음 코드가 실행되지 않도록 하기 위함
        }

        axios.post('/api/pizzas', formData, {headers: {'Content-Type': 'multipart/form-data'}})
            .then((res) => {
                console.log(res.data);
                alert('피자가 추가되었습니다.');
                setPizzaName('');
                setPizzaPrice('');
                setPizzaDescription('');
                setPizzaImage(null);
            })
            .catch(() => {
                alert('피자 추가에 실패했습니다.');
            });
    }

    return (
        <div className={"pizza-form"}>
            <h1>피자 추가하기</h1>

            <label htmlFor="pizzaName">피자 이름</label>
            <input type="text" id="pizzaName" name="pizzaName" placeholder="피자 이름" value={pizzaName}
                   onChange={(e) => setPizzaName(e.target.value)}/>

            <label htmlFor="pizzaPrice">피자 가격</label>
            <input type="number" id="pizzaPrice" name="pizzaPrice" placeholder="피자 가격" value={pizzaPrice}
                   onChange={(e) => setPizzaPrice(e.target.value)}/>

            <label htmlFor="pizzaDescription">피자 설명</label>
            <textarea id="pizzaDescription" name="pizzaDescription" placeholder="피자 설명" value={pizzaDescription}
                      onChange={(e) => setPizzaDescription(e.target.value)}/>
            <label htmlFor="pizzaImage">피자 이미지</label>
            <input type="file" id="pizzaImage" name="pizzaImage"
                   onChange={(e) => setPizzaImage(e.target.value[0])}/>
            {/* value[0] 사용하는 이유 : 사진이 여러 장 인 경우를 고려해 항상 첫번째를 가져오도록  */}

            <button type="button" onClick={handleAddPizza}>피자 추가하기</button>
        </div>
    )
}

export default PizzaForm;