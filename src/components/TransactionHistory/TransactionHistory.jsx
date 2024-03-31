import css from "../TransactionHistory/TransactionHistory.module.css"


export default function TransactionHistory({items}) {
    return (
        <>
            <table className={css.container}>
                <thead className={css.sshead}>
                    <tr className={css.listhead}>
                    <th >Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    </tr>
                </thead>

                <tbody >
                    {items.map(({ id, type, amount, currency }) => {
                        return (
                        <tr className={css.listhead} key={id}>
                        <td >{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                    )
                    
                
                })}
                </tbody>
                </table>
        </>
    )
}

