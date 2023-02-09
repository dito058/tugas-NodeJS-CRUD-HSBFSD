const { user } = require('../models');

exports.helloWorld = (req, res, next) => {
  res.send('<h1>Hello Indonesia!</h1>');
};

exports.aboutMe = async (req, res, next) => {
  try {
    const me = await user.findOne({
      where: { id: req.user.id },
    });

    return res.status(200).send({
      message: `retrive data profile success`,
      data: me.dataValues,
    });
  } catch (error) {
    console.log('object :>> ', error);
    return res.status(500).send({ error });
  }
};

exports.update = async (req, res, next) => {
  try {
    const payload = req.body;
    if (payload.name == '' && payload.email == '' && payload.username == '') {
      return res.status(400).send({
        message: `body is required, cannot be empty`,
      });
    }
    const updateUser = await user.update(
      {
        firstname: payload.firstname,
        lastname: payload.lastname,
        username: payload.username,
      },
      { where: { id: req.user.id } }
    );

    return res.status(200).send({
      message: `update data profile success`,
    });
  } catch (error) {
    console.log('object :>> ', error);
    return res.status(500).send({ error });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const deleteUser = await user.destroy({
      where: { id: req.user.id },
    });

    return res.status(200).send({
      message: `delete data profile success`,
    });
  } catch (error) {
    console.log('object :>> ', error);
    return res.status(500).send({ error });
  }
};
