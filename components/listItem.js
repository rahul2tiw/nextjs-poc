export default ({ title, onPress }) => (
    <div className="main" onClick={onPress}>
      <h1>{title}</h1>
      <style jsx>{`
        .main {
          border: 1px solid #eee;
          // padding: 10 10px;
        }
  
        h1 {
          font-size: 20px;
          font-weight: bold;
          margin: 10px 0;
        }
      `}</style>
    </div>
  )
  