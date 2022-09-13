import { iocContainer } from "./ioc/index";

import type { User } from './types';

const renderUsers = async () => {
  const users = iocContainer.resolve('users');
  const usersMock = await users.getUsers();

  const listNode = document.getElementById('users-list');

  usersMock.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = () => {
  renderUsers();
};

window.onload = () => {
  const logger = iocContainer.resolve('logger');
  logger.info('Page is loaded.');

  app();
};
