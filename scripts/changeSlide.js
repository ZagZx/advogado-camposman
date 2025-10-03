function changeSlide(soma) {
    const depoimentos = document.getElementById('depdiv').children;

    for (let i = 0; i < depoimentos.length; i++) {
        if (depoimentos.item(i).id == 'ativado') {   
            depoimentos.item(i).id = 'desativado';

            if (soma === 1)
            {
                if (i+soma < depoimentos.length)
                {
                    depoimentos.item(i+soma).id = 'ativado';
                }
                else
                {
                    depoimentos.item(0).id = 'ativado';
                }
            
            }
            else if (soma === -1)
            {
                if (i+soma < 0)
                {
                    depoimentos.item(i+depoimentos.length-1).id = 'ativado';
                }
                else
                {
                    depoimentos.item(i+soma).id = 'ativado';
                }
            }
            break;
        }
    }
}