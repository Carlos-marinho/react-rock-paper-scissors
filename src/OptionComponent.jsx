export default function OptionComponent({option}) {
if (option === 'rock') {
    return (
    <div className='flex capitalize bg-red-400 rounded-full justify-center items-center text-center w-24 h-24 mx-5 my-2'>
        <h5>{option}</h5>
    </div>
    )
} else if (option === 'paper') {
    return (
    <div className='flex capitalize bg-yellow-400 rounded-full justify-center items-center text-center w-24 h-24 mx-5 my-2'>
        <h5>{option}</h5>
    </div>
    )
} else if (option === 'scissors') {
    return (
    <div className='flex capitalize bg-blue-400 rounded-full justify-center items-center text-center w-24 h-24 mx-5 my-2'>
        <h5>{option}</h5>
    </div>
    )
}
};