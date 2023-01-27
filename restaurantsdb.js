const Sequelize = require('sequelize');

// set up sequelize to point to our postgres database
var sequelize = new Sequelize('pxmyhmki', 'pxmyhmki', 'Lecp8wJA3p8R--H1mgHF70F9iCRxub9u', {
    host: 'snuffleupagus.db.elephantsql.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    },
    query: { raw: true }
});

const CuisineTypes = sequelize.define('cuisinetypes', {
    cu_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        startAt: 1200
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { timestamps: false });

const Restaurants = sequelize.define('restaurants', {
    res_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    },
    cu_id: {
        type: Sequelize.INTEGER,
        references: {
            model: CuisineTypes,
            key: 'cu_id',
        }
    }
}, { timestamps: false }); //REMOVES THE createdAt & updatedAt TIMESTAMPS

module.exports.initialize = () => {
    return new Promise((resolve, reject) => {
        sequelize.sync().then(() => {
            resolve('database synced');
        }).catch(() => {
            reject('unable to sync the database');
        })
    });
};

module.exports.getAllRestaurants = () => {
    return new Promise((resolve, reject) => {
        sequelize.sync().then(() => {
            resolve(Restaurants.findAll());
        }).catch(() => {
            reject('no results returned');
        })
    });
};

module.exports.getAllCuisineTypes = () => {
    return new Promise((resolve, reject) => {
        sequelize.sync().then(() => {
            resolve(CuisineTypes.findAll());
        }).catch(() => {
            reject('no results returned');
        })
    });
};
