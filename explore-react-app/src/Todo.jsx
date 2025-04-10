export default function Todo({isDone, task}){
    return (
        <div>
            {isDone?`Working on ${task}`:`Finished: ${task}`}
        </div>
    )
}