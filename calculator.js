function calculate() {
    const formValues = readForm()
    
    const results = calculate_2017_09_01_until_2022_02_28(formValues)

    alert(JSON.stringify(results))

    return false
}

function calculate_2017_09_01_until_2022_02_28(formValues) {
    if (new Date(2022, 02 - 1, 28) < formValues.startDate || formValues.endDate < new Date(2017, 09 - 1, 01)) {
        return []
    }
    return []
}

function readForm() {
    const startDate = readDateInput("start")
    const endDate = readDateInput("end")

    const ozLetmoraBoolean = readBooleanInput("oz_letmora")
    const principalBoolean = readBooleanInput("principal")

    return {
        startDate: startDate,
        endDate: endDate,
        ozLetmoraBoolean: ozLetmoraBoolean,
        principalBoolean: principalBoolean,
    }
}

function readDateInput(id) {
    const dateElement = document.getElementById(id)
    return new Date(dateElement.value)
}

function readBooleanInput(id) {
    const dateElement = document.getElementById(id)
    return dateElement.checked
}