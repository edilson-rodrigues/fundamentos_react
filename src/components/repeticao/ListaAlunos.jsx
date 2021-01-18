import * as React from 'react';
import alunos from '../../data/alunos'

// eslint-disable-next-line
export default props => {

    const listAlunos = alunos.map(aluno => {
        return <li key={aluno.id}>{aluno.id}) {aluno.nome} -&gt; {aluno.nota}</li>
    })
    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {listAlunos}
            </ul>
        </div>
    )
}