import * as Yup from 'yup';
 
const newsSchema = Yup.object().shape({
    title: Yup.string().min(2, 'Too Short!').required('Required'),
    imageUrl: Yup.string().min(2, 'Too Short!').required('Required'),
    body: Yup.string().min(5, 'Too Short!').required('Required'),
    tags: Yup.array().required('Required'),
    createdAt: Yup.date().required(),
    publisherId: Yup.string().required(),
});

export default newsSchema
