import MainStore from 'app/stores/MainStore';

let currentValue;
const handleChange = () => {
    let previousValue = currentValue;
    currentValue = MainStore.getState();

    if(previousValue !== currentValue){
        console.log("previousValue: ", previousValue);
        console.log("currentValue: ", currentValue);
    }
}

export default handleChange;