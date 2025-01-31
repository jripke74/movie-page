const Card = ({title}) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h2>Functional Arrow Component</h2>
      <Card title="Star Wars" />
      <Card title="The Lion King"/>
      <Card title="Avatar"/>
    </div>
  )
}

export default App;
