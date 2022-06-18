function to (promise, errText) {
    return promise.then((res) => {
        return [res]
    }).catch(err => {
            if(errText) {
                throw new Error(errText, err)
            }            
            throw new Error(err)            
        })
}