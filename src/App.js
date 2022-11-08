import './App.css';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { Checkbox, createTheme, FormControlLabel, FormGroup, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import ReactDOM from 'react-dom';
import './index.css';
import React, {useState, useCallback, useRef, useId, useTheme} from 'react'


const darkTheme = createTheme({
  palette:{
    mode:'dark'
  }
})

const lightTheme = createTheme({
  palette:{
    mode:'light',
    primary:{
      main:'#a032a8',
    },
    secondary:{
      main:'#d8addb'
    },
    background:{
      paper:'#000'
    },
    text:{
      primary: '#173A5E',
    }
  }
})

function App () {
  const obj = {
    title:"name",
    count:1
  }

  const arr = [1, 2, 3]
  const [isDark, setIsDark] = useState(false)

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <div className="App">
      <SampleForVirtualDOM data = {[]}/>  
        <InputAvtoFocus data = {obj}/>
        <Button variant="contained" onClick={()=>{setIsDark(pervstate => !pervstate)}}>Cange the subject</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;

const SampleForVirtualDOM = ({data = []}) =>{

  const theme = useTheme()

  console.log(theme)
  //console.log(date)

  return(
    <div style={{background:theme.palette.primary.main}}>
      FREE text
      {data}
    </div>
  )
}

SampleForVirtualDOM.defaultProps = {
data:[]
}

{/* <Button variant="contained"> Outlined</Button>

<FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Laabel" />
</FormGroup> */}

const InputAvtoFocus = ({data}) =>{
  const ref = useRef(null)
  useEffect(()=>{
    // ref.current.focus()
    ref.current?.focus()
    //ref.current?.appEventListener('mouseover',(e)=>{
    // e.target.style.border = "4px solid red"
    // })
  }, [])

  return(
    <>
    <input onMouseEnter = {()=>{console.log('hover')}}/>
    <div>{data.id?.map(e => e)}</div>
    </>
  )
}

<Box sx = {{
backgroundColor: '#c9c9c9',
color: 'text.primary'
}}
>
<p>TEXT</p>
<Button variant="contained">Outlined</Button>
</Box>

const RenderTree = () =>{
  console.log('render parent')
  return(
    <div>
      <RenderTreeChild1/>
      <RenderTreeChild2/>
    </div>
  )
}
const RenderTreeChild1 = ()=>{
  const [state, setState] = useState(false)
  console.log('child1')
  return(
    <button onClick={()=>{setState(p => !p)}}>Child 1</button>
  )
}

const RenderTreeChild2 = ()=>{
  const RenderTreeChild2 = ()=>{
    const [state, setState] = useState(false)
    console.log('child2')
    return(
      <div>
      <button onClick={()=>{setState(p => !p)}}>Child 2</button>
      {state ? <RenderTreeChild3/> : <p>Replacement</p> }
      <RenderTreeChild4/>
      </div>
    )
}}

const RenderTreeChild3 = ()=>{
  useEffect(()=>{
    console.log("child 3 render (only if mounted not update)")
  },[])
  return(
    <h1>SAB-child-3</h1>
  )
}

const RenderTreeChild4 = () => {
  const [classesName, setClasses] = useState('default')
  useEffect(()=>{
    console.log("cild 4 render (only if mounted not update)")
  },[])
  return(
    <>
    <h2 className={classesName} id ='child4'>SAB-child-4</h2>
    <button onClick={()=>{setClasses('changed')}}>Chenge the name</button>
    </>
  )
}

{<ul>
  <li>First</li>
  <li>Second</li>
</ul>}

{<ul>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>}

{<ul>
  <li>St.Petersburg</li>
  <li>Moscov</li>
</ul>}

{<ul>
  <li>Sochi</li>
  <li>St.Petersburg</li>
  <li>Moscov</li>
</ul>}

<ul>
<li key = '1' >Sochi</li>
<li key = '2' >St.Petersburg</li>
<li key = '3' >Moscov</li>
</ul>

function NumberList(props) {
  const numbers = props.numbers;
  const classNames = numbers.map((number) =>
     <className value key={number} />
  );
  return (
    <ul>
      {classNames}
    </ul>
  );
}