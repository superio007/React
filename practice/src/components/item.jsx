const item = (props) => {
    let { nameItem } = props;
    return (
        <li className="list-group-item text-bg-dark text-white text-center text-uppercase">{nameItem}</li>
    );
}
export default item;