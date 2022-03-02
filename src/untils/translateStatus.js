export const translateStatus = (status) =>{
    if(status === 'present') return 'Obecny'
    else if(status === 'absent') return 'Nieobecny'
    else if(status === 'dontKnow') return 'Nie wiem'
}