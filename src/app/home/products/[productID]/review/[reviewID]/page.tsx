export default function ReviewID({params}:{params:{productID:string; reviewID:string}}){
    return <h1> id bol {params.productID} review ni {params.reviewID} </h1>;
}