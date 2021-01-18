import * as React from 'react';
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

// eslint-disable-next-line
export default _ => {

    const tabelaProdutos = produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nomeProduto}</td>
                <td>R$ {parseFloat(produto.precoProduto).toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {tabelaProdutos}
                </tbody>

            </table>

        </div>
    )
}