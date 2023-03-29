const ss = SpreadsheetApp.openById("165yzKOjmonKXK2MzJx_nA-xNoTwOfME99ewBo0CWDZg");
const sheet = ss.getSheetByName("feedback")
const rng = ss.getDataRange()
const data = rng.getValues()
const headings = data[0]

function GET(){
    const res = {'feedback': []}
    sheet.getDataRange().getValues().slice(1).forEach(r => res.feedback.push(formatProduct(r)))

    return res

}

function DELETE(id){
    const row = sheet.getDataRange().getValues().map((r,idx) => [idx+1, ...r]).filter(ro => ro[1].toString() === id.toString())[0][0]
    sheet.deleteRow(row)

    return GET()

}

function POST(obj){

    const arr = [obj.id, obj.rating, obj.text]

    sheet.appendRow(arr)


    return GET()

}

function PUT(obj){

    const arr = [obj.rating, obj.text]
    const row = sheet.getDataRange().getValues().map((r,idx) => [idx+1, ...r]).filter(ro => ro[1].toString() === obj.id.toString())[0][0]

    sheet.getRange(row,2,1,2).setValues([arr])


    return GET()

}





function doGet(request) {


    if(request.parameter.action === 'GET'){
        const JSONString = JSON.stringify(GET())
        const JSONOutput = ContentService.createTextOutput(JSONString);
        JSONOutput.setMimeType(ContentService.MimeType.JSON);
        return JSONOutput
    }

    if(request.parameter.action === 'PUT'){
        const JSONString = JSON.stringify(PUT({id: request.parameter.id, rating: request.parameter.rating, text: request.parameter.text}))
        const JSONOutput = ContentService.createTextOutput(JSONString);
        JSONOutput.setMimeType(ContentService.MimeType.JSON);
        return JSONOutput
    }

    if(request.parameter.action === 'POST'){
        const JSONString = JSON.stringify(POST({id: request.parameter.id, rating: request.parameter.rating, text: request.parameter.text}))
        const JSONOutput = ContentService.createTextOutput(JSONString);
        JSONOutput.setMimeType(ContentService.MimeType.JSON);
        return JSONOutput
    }

    if(request.parameter.action === 'DELETE'){
        const JSONString = JSON.stringify(DELETE(request.parameter.id))
        const JSONOutput = ContentService.createTextOutput(JSONString);
        JSONOutput.setMimeType(ContentService.MimeType.JSON);
        return JSONOutput
    }

    const JSONString = JSON.stringify({'feedback': []})
    const JSONOutput = ContentService.createTextOutput(JSONString);
    JSONOutput.setMimeType(ContentService.MimeType.JSON);
    return JSONOutput


}


function formatProduct(rowData){
    const product = {}
    headings.forEach((h,i) => product[h] = rowData[i])
    return product
}
