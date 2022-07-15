const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getImage(req, res);
        }

        case 'POST': {
            return addImage(req, res);
        }

        case 'PUT': {
            return updateImage(req, res);
        }

        case 'DELETE': {
            return deleteImage(req, res);
        }
    }
}