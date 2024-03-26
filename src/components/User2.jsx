

const User2 = ({user1}) => {
    const[username, name, phone]=user1
    return (
       
            <div className="cards">
                   <h1 > {username} </h1>
                   <h2> {name} </h2>
                   <h3> {phone} </h3>
                </div>
       
    );
};

export default User2;