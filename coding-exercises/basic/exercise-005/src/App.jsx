export default function EmployeesList() {
    const employees = ['Alice', 'Bob', 'Carl']

    // try to change forEach() to map()
    // check the warning in the console
    return (
        <>
            {employees.forEach((employee) => (
                <h2>name: {employee}</h2>
            ))}
        </>
    )
}

// export default function EmployeesList() {
//     const employees = ['Alice', 'Bob', 'Carl']
//     const results = []
//
//     employees.forEach((employee, index) => {
//         results.push(<h2 key={index}>name: {employee}</h2>)
//     })
//
//     return <div>{results}</div>
// }
