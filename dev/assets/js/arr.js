const peopleArr = [

    {
        id: 1,
        customerName: 'Jane Cooper',
        company: 'Microsoft',
        phoneNumber: '(225) 555-0118',
        email: 'jane@microsoft.com',
        country: 'United States',
        status: 'Active'
    },
    {
        id: 2,
        customerName: 'Floyd Miles',
        company: 'Yahoo',
        phoneNumber: '(205) 555-0100',
        email: 'floyd@yahoo.com',
        country: 'Kiribati',
        status: 'Inactive'
    },
    {
        id: 3,
        customerName: 'Ronald Richards',
        company: 'Adobe',
        phoneNumber: '(302) 555-0107',
        email: 'ronald@adobe.com',
        country: 'Israel',
        status: 'Inactive'
    },
    {
        id: 4,
        customerName: 'Marvin McKinney',
        company: 'Tesla',
        phoneNumber: '(252) 555-0126',
        email: 'marvin@tesla.com',
        country: 'Iran',
        status: 'Active'
    },
    {
        id: 5,
        customerName: 'Jerome Bell',
        company: 'Google',
        phoneNumber: '(629) 555-0129',
        email: 'jerome@google.com',
        country: 'Réunion',
        status: 'Active'
    },
    {
        id: 6,
        customerName: 'Kathryn Murphy',
        company: 'Microsoft',
        phoneNumber: '(406) 555-0120',
        email: 'kathryn@microsoft.com',
        country: 'Curaçao',
        status: 'Active'
    },
    {
        id: 7,
        customerName: 'Jacob Jones',
        company: 'Yahoo',
        phoneNumber: '(208) 555-0112',
        email: 'jacob@yahoo.com',
        country: 'Brazil',
        status: 'Active'
    },
    {
        id: 8,
        customerName: 'Kristin Watson',
        company: 'Facebook',
        phoneNumber: '(704) 555-0127',
        email: 'kristin@facebook.com',
        country: 'Äland Islands',
        status: 'Inactive'
    },
]

window.addEventListener('load', function() {
    const userContainer = document.getElementById('table_body')

    const renderPeople =(array)=> {
        const list = array.map (person => {
            const statusClass = person.status === 'Inactive' ? 'content__table-status--inactive' : 'content__table-status--active';
            return `<tr class="content__table-body">
                        <td>${person.customerName}</td>
                        <td>${person.company}</td>
                        <td>${person.phoneNumber}</td>
                        <td>${person.email}</td>
                        <td>${person.country}</td>
                        <td><span class="content__table-status ${statusClass}">${person.status}</span></td>
                    </tr>`
        }).join ('')
        userContainer.innerHTML = list
    }
    renderPeople(peopleArr)

})
