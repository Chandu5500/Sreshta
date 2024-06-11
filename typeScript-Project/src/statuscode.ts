enum StatusCodes{
    Unauthorized,
    Ok = 200,
    NotFound = 404,
    Disconnected,
}
console.log(`${StatusCodes.Unauthorized}\n${StatusCodes.Disconnected}`);