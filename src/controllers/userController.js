exports.getUser = (req, res, next) => {
  res.send({
    nama: 'Ujang',
    Alamat: 'Bandung',
    Pekerjaan: 'Programmer',
    Umur: 25,
  });
};

exports.createUser = async (req, res, next) => {
  try {
    const payload = req.body;

    if (payload.name == '' && payload.email == '') {
      return res.status(400).send({
        message: `body is required, cannot be empty`,
      });
    }

    return res.status(201).send({
      message: `success data created`,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};
