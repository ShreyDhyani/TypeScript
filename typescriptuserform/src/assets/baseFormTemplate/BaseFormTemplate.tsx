type Props = {
  form: Object
}

export default function BaseFormTemplate({form}:Props) {

  const keys= Object.keys(form);
  const values = Object.values(form);

  const print = () => {
    keys.map((key,index) => {console.log(key , values[index])})
  }
  return (true)
}
