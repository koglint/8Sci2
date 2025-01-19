export const trophyDefinitions = {
        backgroundImages: {
        topic1: "./assets/BGs/trophy-room-background-topic1.png",
        topic2: "./assets/BGs/trophy-room-background-topic2.png",
        topic3: "./assets/BGs/trophy-room-background-topic3.png",
        topic3: "./assets/BGs/trophy-room-background-topic3.png",
        topic4: "./assets/BGs/trophy-room-background-topic4.png",
        topic5: "./assets/BGs/trophy-room-background-topic5.png",
        topic6: "./assets/BGs/trophy-room-background-topic6.png",
        topic7: "./assets/BGs/trophy-room-background-topic7.png"
        // Add more topics as needed
    },
    trophies: {
        topic1: [
                {
                    id: "first_must_do",
                    name: "First Steps",
                    image: "tile001.png",
                    criteria: "Complete the first 'Must Do' activity.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-must") && tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-must") && tasks[taskKey].completed === true) ? 100 : 0;
                    }
                },
                {
                    id: "first_should_do",
                    name: "Explorer's Badge",
                    image: "tile002.png",
                    criteria: "Complete the first 'Should Do' activity.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-should") && tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-should") && tasks[taskKey].completed === true) ? 100 : 0;
                    }
                },
                {
                    id: "first_could_do",
                    name: "Above and Beyond",
                    image: "tile003.png",
                    criteria: "Complete the first 'Could Do' activity.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-could") && tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-could") && tasks[taskKey].completed === true) ? 100 : 0;
                    }
                },
                {
                    id: "first_all_types",
                    name: "Lesson Adventurer",
                    image: "tile004.png",
                    criteria: "Complete the first 'Must', 'Should', and 'Could Do' activities from a single lesson.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const lessons = {};

                        // Iterate through all tasks in the topic
                        Object.keys(tasks).forEach(taskKey => {
                            // Extract lesson and type from the task key
                            const parts = taskKey.split("-");
                            const lesson = parts.slice(0, -1).join("-"); // Everything except the last part is the lesson
                            const type = parts[parts.length - 1]; // The last part is the type (must, should, could)

                            // Initialize lesson entry if not already present
                            if (!lessons[lesson]) lessons[lesson] = { must: false, should: false, could: false };

                            // Mark the type as completed if the task is completed
                            if (tasks[taskKey].completed && lessons[lesson][type] !== undefined) {
                                lessons[lesson][type] = true;
                            }
                        });

                        // Check if any lesson has all three types completed
                        return Object.values(lessons).some(lesson => lesson.must && lesson.should && lesson.could);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const lessons = {};

                        // Iterate through all tasks in the topic
                        Object.keys(tasks).forEach(taskKey => {
                            // Extract lesson and type from the task key
                            const parts = taskKey.split("-");
                            const lesson = parts.slice(0, -1).join("-"); // Everything except the last part is the lesson
                            const type = parts[parts.length - 1]; // The last part is the type (must, should, could)

                            // Initialize lesson entry if not already present
                            if (!lessons[lesson]) lessons[lesson] = { must: false, should: false, could: false };

                            // Mark the type as completed if the task is completed
                            if (tasks[taskKey].completed && lessons[lesson][type] !== undefined) {
                                lessons[lesson][type] = true;
                            }
                        });

                        // Check if any lesson has all three types completed
                        const hasCompletedAllTypes = Object.values(lessons).some(lesson => lesson.must && lesson.should && lesson.could);

                        return hasCompletedAllTypes ? 100 : 0;
                    }
                },

                {
                    id: "all_must_dos",
                    name: "Must Manager",
                    image: "tile005.png",
                    criteria: "Complete all 'Must Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const mustDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-must"));
                        return mustDos.length > 0 && mustDos.every(taskKey => tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const mustDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-must"));
                        const completedMustDos = mustDos.filter(taskKey => tasks[taskKey].completed === true).length;
                        return mustDos.length > 0 ? (completedMustDos / mustDos.length) * 100 : 0;
                    }
                },
                {
                    id: "all_should_dos",
                    name: "Should Seeker",
                    image: "tile006.png",
                    criteria: "Complete all 'Should Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const shouldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-should"));
                        return shouldDos.length > 0 && shouldDos.every(taskKey => tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const shouldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-should"));
                        const completedShouldDos = shouldDos.filter(taskKey => tasks[taskKey].completed === true).length;
                        return shouldDos.length > 0 ? (completedShouldDos / shouldDos.length) * 100 : 0;
                    }
                },
                {
                    id: "all_could_dos",
                    name: "Could Be Champ",
                    image: "tile007.png",
                    criteria: "Complete all 'Could Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const couldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-could"));
                        return couldDos.length > 0 && couldDos.every(taskKey => tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const couldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-could"));
                        const completedCouldDos = couldDos.filter(taskKey => tasks[taskKey].completed === true).length;
                        return couldDos.length > 0 ? (completedCouldDos / couldDos.length) * 100 : 0;
                    }
                },
                {
                    id: "all_tasks",
                    name: "Lesson Legend",
                    image: "tile008.png",
                    criteria: "Complete all 'Must', 'Should', and 'Could Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.values(tasks).every(task => task.completed);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const completedTasks = Object.values(tasks).filter(task => task.completed).length;
                        return Object.keys(tasks).length > 0 ? (completedTasks / Object.keys(tasks).length) * 100 : 0;
                    }
                },
                {
                    id: "sp_500",
                    name: "SP Starter",
                    image: "tile009.png",
                    criteria: "Earn 500 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 500,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 500) * 100, 100)
                },
                {
                    id: "sp_1000",
                    name: "SP Collector",
                    image: "tile010.png",
                    criteria: "Earn 1,000 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 1000,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 1000) * 100, 100)
                },
                {
                    id: "sp_5000",
                    name: "SP Titan",
                    image: "tile011.png",
                    criteria: "Earn 5,000 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 5000,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 5000) * 100, 100)
                },
                {
                    id: "sp_9000",
                    name: "SP Overlord",
                    image: "tile012.png",
                    criteria: "Earn 9,000 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 9000,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 9000) * 100, 100)
                }
        ],
        topic2: [
                {
                    id: "first_must_do",
                    name: "First Steps",
                    image: "tile001.png",
                    criteria: "Complete the first 'Must Do' activity.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-must") && tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-must") && tasks[taskKey].completed === true) ? 100 : 0;
                    }
                },
                {
                    id: "first_should_do",
                    name: "Explorer's Badge",
                    image: "tile002.png",
                    criteria: "Complete the first 'Should Do' activity.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-should") && tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-should") && tasks[taskKey].completed === true) ? 100 : 0;
                    }
                },
                {
                    id: "first_could_do",
                    name: "Above and Beyond",
                    image: "tile003.png",
                    criteria: "Complete the first 'Could Do' activity.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-could") && tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-could") && tasks[taskKey].completed === true) ? 100 : 0;
                    }
                },
                {
                    id: "first_all_types",
                    name: "Lesson Adventurer",
                    image: "tile004.png",
                    criteria: "Complete the first 'Must', 'Should', and 'Could Do' activities from a single lesson.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const lessons = {};

                        // Iterate through all tasks in the topic
                        Object.keys(tasks).forEach(taskKey => {
                            // Extract lesson and type from the task key
                            const parts = taskKey.split("-");
                            const lesson = parts.slice(0, -1).join("-"); // Everything except the last part is the lesson
                            const type = parts[parts.length - 1]; // The last part is the type (must, should, could)

                            // Initialize lesson entry if not already present
                            if (!lessons[lesson]) lessons[lesson] = { must: false, should: false, could: false };

                            // Mark the type as completed if the task is completed
                            if (tasks[taskKey].completed && lessons[lesson][type] !== undefined) {
                                lessons[lesson][type] = true;
                            }
                        });

                        // Check if any lesson has all three types completed
                        return Object.values(lessons).some(lesson => lesson.must && lesson.should && lesson.could);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const lessons = {};

                        // Iterate through all tasks in the topic
                        Object.keys(tasks).forEach(taskKey => {
                            // Extract lesson and type from the task key
                            const parts = taskKey.split("-");
                            const lesson = parts.slice(0, -1).join("-"); // Everything except the last part is the lesson
                            const type = parts[parts.length - 1]; // The last part is the type (must, should, could)

                            // Initialize lesson entry if not already present
                            if (!lessons[lesson]) lessons[lesson] = { must: false, should: false, could: false };

                            // Mark the type as completed if the task is completed
                            if (tasks[taskKey].completed && lessons[lesson][type] !== undefined) {
                                lessons[lesson][type] = true;
                            }
                        });

                        // Check if any lesson has all three types completed
                        const hasCompletedAllTypes = Object.values(lessons).some(lesson => lesson.must && lesson.should && lesson.could);

                        return hasCompletedAllTypes ? 100 : 0;
                    }
                },

                {
                    id: "all_must_dos",
                    name: "Must Manager",
                    image: "tile005.png",
                    criteria: "Complete all 'Must Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const mustDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-must"));
                        return mustDos.length > 0 && mustDos.every(taskKey => tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const mustDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-must"));
                        const completedMustDos = mustDos.filter(taskKey => tasks[taskKey].completed === true).length;
                        return mustDos.length > 0 ? (completedMustDos / mustDos.length) * 100 : 0;
                    }
                },
                {
                    id: "all_should_dos",
                    name: "Should Seeker",
                    image: "tile006.png",
                    criteria: "Complete all 'Should Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const shouldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-should"));
                        return shouldDos.length > 0 && shouldDos.every(taskKey => tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const shouldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-should"));
                        const completedShouldDos = shouldDos.filter(taskKey => tasks[taskKey].completed === true).length;
                        return shouldDos.length > 0 ? (completedShouldDos / shouldDos.length) * 100 : 0;
                    }
                },
                {
                    id: "all_could_dos",
                    name: "Could Be Champ",
                    image: "tile007.png",
                    criteria: "Complete all 'Could Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const couldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-could"));
                        return couldDos.length > 0 && couldDos.every(taskKey => tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const couldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-could"));
                        const completedCouldDos = couldDos.filter(taskKey => tasks[taskKey].completed === true).length;
                        return couldDos.length > 0 ? (completedCouldDos / couldDos.length) * 100 : 0;
                    }
                },
                {
                    id: "all_tasks",
                    name: "Lesson Legend",
                    image: "tile008.png",
                    criteria: "Complete all 'Must', 'Should', and 'Could Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.values(tasks).every(task => task.completed);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const completedTasks = Object.values(tasks).filter(task => task.completed).length;
                        return Object.keys(tasks).length > 0 ? (completedTasks / Object.keys(tasks).length) * 100 : 0;
                    }
                },
                {
                    id: "sp_500",
                    name: "SP Starter",
                    image: "tile009.png",
                    criteria: "Earn 500 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 500,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 500) * 100, 100)
                },
                {
                    id: "sp_1000",
                    name: "SP Collector",
                    image: "tile010.png",
                    criteria: "Earn 1,000 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 1000,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 1000) * 100, 100)
                },
                {
                    id: "sp_5000",
                    name: "SP Titan",
                    image: "tile011.png",
                    criteria: "Earn 5,000 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 5000,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 5000) * 100, 100)
                },
                {
                    id: "sp_9000",
                    name: "SP Overlord",
                    image: "tile012.png",
                    criteria: "Earn 9,000 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 9000,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 9000) * 100, 100)
                }

        ],
        topic3: [
                {
                    id: "first_must_do",
                    name: "First Steps",
                    image: "tile001.png",
                    criteria: "Complete the first 'Must Do' activity.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-must") && tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-must") && tasks[taskKey].completed === true) ? 100 : 0;
                    }
                },
                {
                    id: "first_should_do",
                    name: "Explorer's Badge",
                    image: "tile002.png",
                    criteria: "Complete the first 'Should Do' activity.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-should") && tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-should") && tasks[taskKey].completed === true) ? 100 : 0;
                    }
                },
                {
                    id: "first_could_do",
                    name: "Above and Beyond",
                    image: "tile003.png",
                    criteria: "Complete the first 'Could Do' activity.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-could") && tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-could") && tasks[taskKey].completed === true) ? 100 : 0;
                    }
                },
                {
                    id: "first_all_types",
                    name: "Lesson Adventurer",
                    image: "tile004.png",
                    criteria: "Complete the first 'Must', 'Should', and 'Could Do' activities from a single lesson.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const lessons = {};

                        // Iterate through all tasks in the topic
                        Object.keys(tasks).forEach(taskKey => {
                            // Extract lesson and type from the task key
                            const parts = taskKey.split("-");
                            const lesson = parts.slice(0, -1).join("-"); // Everything except the last part is the lesson
                            const type = parts[parts.length - 1]; // The last part is the type (must, should, could)

                            // Initialize lesson entry if not already present
                            if (!lessons[lesson]) lessons[lesson] = { must: false, should: false, could: false };

                            // Mark the type as completed if the task is completed
                            if (tasks[taskKey].completed && lessons[lesson][type] !== undefined) {
                                lessons[lesson][type] = true;
                            }
                        });

                        // Check if any lesson has all three types completed
                        return Object.values(lessons).some(lesson => lesson.must && lesson.should && lesson.could);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const lessons = {};

                        // Iterate through all tasks in the topic
                        Object.keys(tasks).forEach(taskKey => {
                            // Extract lesson and type from the task key
                            const parts = taskKey.split("-");
                            const lesson = parts.slice(0, -1).join("-"); // Everything except the last part is the lesson
                            const type = parts[parts.length - 1]; // The last part is the type (must, should, could)

                            // Initialize lesson entry if not already present
                            if (!lessons[lesson]) lessons[lesson] = { must: false, should: false, could: false };

                            // Mark the type as completed if the task is completed
                            if (tasks[taskKey].completed && lessons[lesson][type] !== undefined) {
                                lessons[lesson][type] = true;
                            }
                        });

                        // Check if any lesson has all three types completed
                        const hasCompletedAllTypes = Object.values(lessons).some(lesson => lesson.must && lesson.should && lesson.could);

                        return hasCompletedAllTypes ? 100 : 0;
                    }
                },

                {
                    id: "all_must_dos",
                    name: "Must Manager",
                    image: "tile005.png",
                    criteria: "Complete all 'Must Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const mustDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-must"));
                        return mustDos.length > 0 && mustDos.every(taskKey => tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const mustDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-must"));
                        const completedMustDos = mustDos.filter(taskKey => tasks[taskKey].completed === true).length;
                        return mustDos.length > 0 ? (completedMustDos / mustDos.length) * 100 : 0;
                    }
                },
                {
                    id: "all_should_dos",
                    name: "Should Seeker",
                    image: "tile006.png",
                    criteria: "Complete all 'Should Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const shouldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-should"));
                        return shouldDos.length > 0 && shouldDos.every(taskKey => tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const shouldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-should"));
                        const completedShouldDos = shouldDos.filter(taskKey => tasks[taskKey].completed === true).length;
                        return shouldDos.length > 0 ? (completedShouldDos / shouldDos.length) * 100 : 0;
                    }
                },
                {
                    id: "all_could_dos",
                    name: "Could Be Champ",
                    image: "tile007.png",
                    criteria: "Complete all 'Could Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const couldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-could"));
                        return couldDos.length > 0 && couldDos.every(taskKey => tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const couldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-could"));
                        const completedCouldDos = couldDos.filter(taskKey => tasks[taskKey].completed === true).length;
                        return couldDos.length > 0 ? (completedCouldDos / couldDos.length) * 100 : 0;
                    }
                },
                {
                    id: "all_tasks",
                    name: "Lesson Legend",
                    image: "tile008.png",
                    criteria: "Complete all 'Must', 'Should', and 'Could Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.values(tasks).every(task => task.completed);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const completedTasks = Object.values(tasks).filter(task => task.completed).length;
                        return Object.keys(tasks).length > 0 ? (completedTasks / Object.keys(tasks).length) * 100 : 0;
                    }
                },
                {
                    id: "sp_500",
                    name: "SP Starter",
                    image: "tile009.png",
                    criteria: "Earn 500 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 500,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 500) * 100, 100)
                },
                {
                    id: "sp_1000",
                    name: "SP Collector",
                    image: "tile010.png",
                    criteria: "Earn 1,000 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 1000,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 1000) * 100, 100)
                },
                {
                    id: "sp_5000",
                    name: "SP Titan",
                    image: "tile011.png",
                    criteria: "Earn 5,000 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 5000,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 5000) * 100, 100)
                },
                {
                    id: "sp_9000",
                    name: "SP Overlord",
                    image: "tile012.png",
                    criteria: "Earn 9,000 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 9000,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 9000) * 100, 100)
                }
        ],
        topic4:[
            {
                    id: "first_must_do",
                    name: "First Steps",
                    image: "tile001.png",
                    criteria: "Complete the first 'Must Do' activity.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-must") && tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-must") && tasks[taskKey].completed === true) ? 100 : 0;
                    }
                },
                {
                    id: "first_should_do",
                    name: "Explorer's Badge",
                    image: "tile002.png",
                    criteria: "Complete the first 'Should Do' activity.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-should") && tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-should") && tasks[taskKey].completed === true) ? 100 : 0;
                    }
                },
                {
                    id: "first_could_do",
                    name: "Above and Beyond",
                    image: "tile003.png",
                    criteria: "Complete the first 'Could Do' activity.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-could") && tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-could") && tasks[taskKey].completed === true) ? 100 : 0;
                    }
                },
                {
                    id: "first_all_types",
                    name: "Lesson Adventurer",
                    image: "tile004.png",
                    criteria: "Complete the first 'Must', 'Should', and 'Could Do' activities from a single lesson.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const lessons = {};

                        // Iterate through all tasks in the topic
                        Object.keys(tasks).forEach(taskKey => {
                            // Extract lesson and type from the task key
                            const parts = taskKey.split("-");
                            const lesson = parts.slice(0, -1).join("-"); // Everything except the last part is the lesson
                            const type = parts[parts.length - 1]; // The last part is the type (must, should, could)

                            // Initialize lesson entry if not already present
                            if (!lessons[lesson]) lessons[lesson] = { must: false, should: false, could: false };

                            // Mark the type as completed if the task is completed
                            if (tasks[taskKey].completed && lessons[lesson][type] !== undefined) {
                                lessons[lesson][type] = true;
                            }
                        });

                        // Check if any lesson has all three types completed
                        return Object.values(lessons).some(lesson => lesson.must && lesson.should && lesson.could);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const lessons = {};

                        // Iterate through all tasks in the topic
                        Object.keys(tasks).forEach(taskKey => {
                            // Extract lesson and type from the task key
                            const parts = taskKey.split("-");
                            const lesson = parts.slice(0, -1).join("-"); // Everything except the last part is the lesson
                            const type = parts[parts.length - 1]; // The last part is the type (must, should, could)

                            // Initialize lesson entry if not already present
                            if (!lessons[lesson]) lessons[lesson] = { must: false, should: false, could: false };

                            // Mark the type as completed if the task is completed
                            if (tasks[taskKey].completed && lessons[lesson][type] !== undefined) {
                                lessons[lesson][type] = true;
                            }
                        });

                        // Check if any lesson has all three types completed
                        const hasCompletedAllTypes = Object.values(lessons).some(lesson => lesson.must && lesson.should && lesson.could);

                        return hasCompletedAllTypes ? 100 : 0;
                    }
                },

                {
                    id: "all_must_dos",
                    name: "Must Manager",
                    image: "tile005.png",
                    criteria: "Complete all 'Must Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const mustDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-must"));
                        return mustDos.length > 0 && mustDos.every(taskKey => tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const mustDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-must"));
                        const completedMustDos = mustDos.filter(taskKey => tasks[taskKey].completed === true).length;
                        return mustDos.length > 0 ? (completedMustDos / mustDos.length) * 100 : 0;
                    }
                },
                {
                    id: "all_should_dos",
                    name: "Should Seeker",
                    image: "tile006.png",
                    criteria: "Complete all 'Should Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const shouldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-should"));
                        return shouldDos.length > 0 && shouldDos.every(taskKey => tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const shouldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-should"));
                        const completedShouldDos = shouldDos.filter(taskKey => tasks[taskKey].completed === true).length;
                        return shouldDos.length > 0 ? (completedShouldDos / shouldDos.length) * 100 : 0;
                    }
                },
                {
                    id: "all_could_dos",
                    name: "Could Be Champ",
                    image: "tile007.png",
                    criteria: "Complete all 'Could Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const couldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-could"));
                        return couldDos.length > 0 && couldDos.every(taskKey => tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const couldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-could"));
                        const completedCouldDos = couldDos.filter(taskKey => tasks[taskKey].completed === true).length;
                        return couldDos.length > 0 ? (completedCouldDos / couldDos.length) * 100 : 0;
                    }
                },
                {
                    id: "all_tasks",
                    name: "Lesson Legend",
                    image: "tile008.png",
                    criteria: "Complete all 'Must', 'Should', and 'Could Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.values(tasks).every(task => task.completed);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const completedTasks = Object.values(tasks).filter(task => task.completed).length;
                        return Object.keys(tasks).length > 0 ? (completedTasks / Object.keys(tasks).length) * 100 : 0;
                    }
                },
                {
                    id: "sp_500",
                    name: "SP Starter",
                    image: "tile009.png",
                    criteria: "Earn 500 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 500,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 500) * 100, 100)
                },
                {
                    id: "sp_1000",
                    name: "SP Collector",
                    image: "tile010.png",
                    criteria: "Earn 1,000 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 1000,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 1000) * 100, 100)
                },
                {
                    id: "sp_5000",
                    name: "SP Titan",
                    image: "tile011.png",
                    criteria: "Earn 5,000 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 5000,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 5000) * 100, 100)
                },
                {
                    id: "sp_9000",
                    name: "SP Overlord",
                    image: "tile012.png",
                    criteria: "Earn 9,000 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 9000,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 9000) * 100, 100)
                }
        ],
        topic5: [
                {
                    id: "first_must_do",
                    name: "First Steps",
                    image: "tile001.png",
                    criteria: "Complete the first 'Must Do' activity.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-must") && tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-must") && tasks[taskKey].completed === true) ? 100 : 0;
                    }
                },
                {
                    id: "first_should_do",
                    name: "Explorer's Badge",
                    image: "tile002.png",
                    criteria: "Complete the first 'Should Do' activity.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-should") && tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-should") && tasks[taskKey].completed === true) ? 100 : 0;
                    }
                },
                {
                    id: "first_could_do",
                    name: "Above and Beyond",
                    image: "tile003.png",
                    criteria: "Complete the first 'Could Do' activity.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-could") && tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-could") && tasks[taskKey].completed === true) ? 100 : 0;
                    }
                },
                {
                    id: "first_all_types",
                    name: "Lesson Adventurer",
                    image: "tile004.png",
                    criteria: "Complete the first 'Must', 'Should', and 'Could Do' activities from a single lesson.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const lessons = {};

                        // Iterate through all tasks in the topic
                        Object.keys(tasks).forEach(taskKey => {
                            // Extract lesson and type from the task key
                            const parts = taskKey.split("-");
                            const lesson = parts.slice(0, -1).join("-"); // Everything except the last part is the lesson
                            const type = parts[parts.length - 1]; // The last part is the type (must, should, could)

                            // Initialize lesson entry if not already present
                            if (!lessons[lesson]) lessons[lesson] = { must: false, should: false, could: false };

                            // Mark the type as completed if the task is completed
                            if (tasks[taskKey].completed && lessons[lesson][type] !== undefined) {
                                lessons[lesson][type] = true;
                            }
                        });

                        // Check if any lesson has all three types completed
                        return Object.values(lessons).some(lesson => lesson.must && lesson.should && lesson.could);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const lessons = {};

                        // Iterate through all tasks in the topic
                        Object.keys(tasks).forEach(taskKey => {
                            // Extract lesson and type from the task key
                            const parts = taskKey.split("-");
                            const lesson = parts.slice(0, -1).join("-"); // Everything except the last part is the lesson
                            const type = parts[parts.length - 1]; // The last part is the type (must, should, could)

                            // Initialize lesson entry if not already present
                            if (!lessons[lesson]) lessons[lesson] = { must: false, should: false, could: false };

                            // Mark the type as completed if the task is completed
                            if (tasks[taskKey].completed && lessons[lesson][type] !== undefined) {
                                lessons[lesson][type] = true;
                            }
                        });

                        // Check if any lesson has all three types completed
                        const hasCompletedAllTypes = Object.values(lessons).some(lesson => lesson.must && lesson.should && lesson.could);

                        return hasCompletedAllTypes ? 100 : 0;
                    }
                },

                {
                    id: "all_must_dos",
                    name: "Must Manager",
                    image: "tile005.png",
                    criteria: "Complete all 'Must Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const mustDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-must"));
                        return mustDos.length > 0 && mustDos.every(taskKey => tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const mustDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-must"));
                        const completedMustDos = mustDos.filter(taskKey => tasks[taskKey].completed === true).length;
                        return mustDos.length > 0 ? (completedMustDos / mustDos.length) * 100 : 0;
                    }
                },
                {
                    id: "all_should_dos",
                    name: "Should Seeker",
                    image: "tile006.png",
                    criteria: "Complete all 'Should Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const shouldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-should"));
                        return shouldDos.length > 0 && shouldDos.every(taskKey => tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const shouldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-should"));
                        const completedShouldDos = shouldDos.filter(taskKey => tasks[taskKey].completed === true).length;
                        return shouldDos.length > 0 ? (completedShouldDos / shouldDos.length) * 100 : 0;
                    }
                },
                {
                    id: "all_could_dos",
                    name: "Could Be Champ",
                    image: "tile007.png",
                    criteria: "Complete all 'Could Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const couldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-could"));
                        return couldDos.length > 0 && couldDos.every(taskKey => tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const couldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-could"));
                        const completedCouldDos = couldDos.filter(taskKey => tasks[taskKey].completed === true).length;
                        return couldDos.length > 0 ? (completedCouldDos / couldDos.length) * 100 : 0;
                    }
                },
                {
                    id: "all_tasks",
                    name: "Lesson Legend",
                    image: "tile008.png",
                    criteria: "Complete all 'Must', 'Should', and 'Could Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.values(tasks).every(task => task.completed);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const completedTasks = Object.values(tasks).filter(task => task.completed).length;
                        return Object.keys(tasks).length > 0 ? (completedTasks / Object.keys(tasks).length) * 100 : 0;
                    }
                },
                {
                    id: "sp_500",
                    name: "SP Starter",
                    image: "tile009.png",
                    criteria: "Earn 500 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 500,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 500) * 100, 100)
                },
                {
                    id: "sp_1000",
                    name: "SP Collector",
                    image: "tile010.png",
                    criteria: "Earn 1,000 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 1000,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 1000) * 100, 100)
                },
                {
                    id: "sp_5000",
                    name: "SP Titan",
                    image: "tile011.png",
                    criteria: "Earn 5,000 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 5000,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 5000) * 100, 100)
                },
                {
                    id: "sp_9000",
                    name: "SP Overlord",
                    image: "tile012.png",
                    criteria: "Earn 9,000 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 9000,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 9000) * 100, 100)
                }
        ],
        topic6: [
{
                    id: "first_must_do",
                    name: "First Steps",
                    image: "tile001.png",
                    criteria: "Complete the first 'Must Do' activity.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-must") && tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-must") && tasks[taskKey].completed === true) ? 100 : 0;
                    }
                },
                {
                    id: "first_should_do",
                    name: "Explorer's Badge",
                    image: "tile002.png",
                    criteria: "Complete the first 'Should Do' activity.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-should") && tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-should") && tasks[taskKey].completed === true) ? 100 : 0;
                    }
                },
                {
                    id: "first_could_do",
                    name: "Above and Beyond",
                    image: "tile003.png",
                    criteria: "Complete the first 'Could Do' activity.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-could") && tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-could") && tasks[taskKey].completed === true) ? 100 : 0;
                    }
                },
                {
                    id: "first_all_types",
                    name: "Lesson Adventurer",
                    image: "tile004.png",
                    criteria: "Complete the first 'Must', 'Should', and 'Could Do' activities from a single lesson.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const lessons = {};

                        // Iterate through all tasks in the topic
                        Object.keys(tasks).forEach(taskKey => {
                            // Extract lesson and type from the task key
                            const parts = taskKey.split("-");
                            const lesson = parts.slice(0, -1).join("-"); // Everything except the last part is the lesson
                            const type = parts[parts.length - 1]; // The last part is the type (must, should, could)

                            // Initialize lesson entry if not already present
                            if (!lessons[lesson]) lessons[lesson] = { must: false, should: false, could: false };

                            // Mark the type as completed if the task is completed
                            if (tasks[taskKey].completed && lessons[lesson][type] !== undefined) {
                                lessons[lesson][type] = true;
                            }
                        });

                        // Check if any lesson has all three types completed
                        return Object.values(lessons).some(lesson => lesson.must && lesson.should && lesson.could);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const lessons = {};

                        // Iterate through all tasks in the topic
                        Object.keys(tasks).forEach(taskKey => {
                            // Extract lesson and type from the task key
                            const parts = taskKey.split("-");
                            const lesson = parts.slice(0, -1).join("-"); // Everything except the last part is the lesson
                            const type = parts[parts.length - 1]; // The last part is the type (must, should, could)

                            // Initialize lesson entry if not already present
                            if (!lessons[lesson]) lessons[lesson] = { must: false, should: false, could: false };

                            // Mark the type as completed if the task is completed
                            if (tasks[taskKey].completed && lessons[lesson][type] !== undefined) {
                                lessons[lesson][type] = true;
                            }
                        });

                        // Check if any lesson has all three types completed
                        const hasCompletedAllTypes = Object.values(lessons).some(lesson => lesson.must && lesson.should && lesson.could);

                        return hasCompletedAllTypes ? 100 : 0;
                    }
                },

                {
                    id: "all_must_dos",
                    name: "Must Manager",
                    image: "tile005.png",
                    criteria: "Complete all 'Must Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const mustDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-must"));
                        return mustDos.length > 0 && mustDos.every(taskKey => tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const mustDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-must"));
                        const completedMustDos = mustDos.filter(taskKey => tasks[taskKey].completed === true).length;
                        return mustDos.length > 0 ? (completedMustDos / mustDos.length) * 100 : 0;
                    }
                },
                {
                    id: "all_should_dos",
                    name: "Should Seeker",
                    image: "tile006.png",
                    criteria: "Complete all 'Should Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const shouldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-should"));
                        return shouldDos.length > 0 && shouldDos.every(taskKey => tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const shouldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-should"));
                        const completedShouldDos = shouldDos.filter(taskKey => tasks[taskKey].completed === true).length;
                        return shouldDos.length > 0 ? (completedShouldDos / shouldDos.length) * 100 : 0;
                    }
                },
                {
                    id: "all_could_dos",
                    name: "Could Be Champ",
                    image: "tile007.png",
                    criteria: "Complete all 'Could Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const couldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-could"));
                        return couldDos.length > 0 && couldDos.every(taskKey => tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const couldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-could"));
                        const completedCouldDos = couldDos.filter(taskKey => tasks[taskKey].completed === true).length;
                        return couldDos.length > 0 ? (completedCouldDos / couldDos.length) * 100 : 0;
                    }
                },
                {
                    id: "all_tasks",
                    name: "Lesson Legend",
                    image: "tile008.png",
                    criteria: "Complete all 'Must', 'Should', and 'Could Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.values(tasks).every(task => task.completed);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const completedTasks = Object.values(tasks).filter(task => task.completed).length;
                        return Object.keys(tasks).length > 0 ? (completedTasks / Object.keys(tasks).length) * 100 : 0;
                    }
                },
                {
                    id: "sp_500",
                    name: "SP Starter",
                    image: "tile009.png",
                    criteria: "Earn 500 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 500,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 500) * 100, 100)
                },
                {
                    id: "sp_1000",
                    name: "SP Collector",
                    image: "tile010.png",
                    criteria: "Earn 1,000 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 1000,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 1000) * 100, 100)
                },
                {
                    id: "sp_5000",
                    name: "SP Titan",
                    image: "tile011.png",
                    criteria: "Earn 5,000 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 5000,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 5000) * 100, 100)
                },
                {
                    id: "sp_9000",
                    name: "SP Overlord",
                    image: "tile012.png",
                    criteria: "Earn 9,000 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 9000,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 9000) * 100, 100)
                }
        ],
        topic7: [
{
                    id: "first_must_do",
                    name: "First Steps",
                    image: "tile001.png",
                    criteria: "Complete the first 'Must Do' activity.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-must") && tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-must") && tasks[taskKey].completed === true) ? 100 : 0;
                    }
                },
                {
                    id: "first_should_do",
                    name: "Explorer's Badge",
                    image: "tile002.png",
                    criteria: "Complete the first 'Should Do' activity.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-should") && tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-should") && tasks[taskKey].completed === true) ? 100 : 0;
                    }
                },
                {
                    id: "first_could_do",
                    name: "Above and Beyond",
                    image: "tile003.png",
                    criteria: "Complete the first 'Could Do' activity.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-could") && tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.keys(tasks).some(taskKey => taskKey.includes("-could") && tasks[taskKey].completed === true) ? 100 : 0;
                    }
                },
                {
                    id: "first_all_types",
                    name: "Lesson Adventurer",
                    image: "tile004.png",
                    criteria: "Complete the first 'Must', 'Should', and 'Could Do' activities from a single lesson.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const lessons = {};

                        // Iterate through all tasks in the topic
                        Object.keys(tasks).forEach(taskKey => {
                            // Extract lesson and type from the task key
                            const parts = taskKey.split("-");
                            const lesson = parts.slice(0, -1).join("-"); // Everything except the last part is the lesson
                            const type = parts[parts.length - 1]; // The last part is the type (must, should, could)

                            // Initialize lesson entry if not already present
                            if (!lessons[lesson]) lessons[lesson] = { must: false, should: false, could: false };

                            // Mark the type as completed if the task is completed
                            if (tasks[taskKey].completed && lessons[lesson][type] !== undefined) {
                                lessons[lesson][type] = true;
                            }
                        });

                        // Check if any lesson has all three types completed
                        return Object.values(lessons).some(lesson => lesson.must && lesson.should && lesson.could);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const lessons = {};

                        // Iterate through all tasks in the topic
                        Object.keys(tasks).forEach(taskKey => {
                            // Extract lesson and type from the task key
                            const parts = taskKey.split("-");
                            const lesson = parts.slice(0, -1).join("-"); // Everything except the last part is the lesson
                            const type = parts[parts.length - 1]; // The last part is the type (must, should, could)

                            // Initialize lesson entry if not already present
                            if (!lessons[lesson]) lessons[lesson] = { must: false, should: false, could: false };

                            // Mark the type as completed if the task is completed
                            if (tasks[taskKey].completed && lessons[lesson][type] !== undefined) {
                                lessons[lesson][type] = true;
                            }
                        });

                        // Check if any lesson has all three types completed
                        const hasCompletedAllTypes = Object.values(lessons).some(lesson => lesson.must && lesson.should && lesson.could);

                        return hasCompletedAllTypes ? 100 : 0;
                    }
                },

                {
                    id: "all_must_dos",
                    name: "Must Manager",
                    image: "tile005.png",
                    criteria: "Complete all 'Must Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const mustDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-must"));
                        return mustDos.length > 0 && mustDos.every(taskKey => tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const mustDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-must"));
                        const completedMustDos = mustDos.filter(taskKey => tasks[taskKey].completed === true).length;
                        return mustDos.length > 0 ? (completedMustDos / mustDos.length) * 100 : 0;
                    }
                },
                {
                    id: "all_should_dos",
                    name: "Should Seeker",
                    image: "tile006.png",
                    criteria: "Complete all 'Should Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const shouldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-should"));
                        return shouldDos.length > 0 && shouldDos.every(taskKey => tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const shouldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-should"));
                        const completedShouldDos = shouldDos.filter(taskKey => tasks[taskKey].completed === true).length;
                        return shouldDos.length > 0 ? (completedShouldDos / shouldDos.length) * 100 : 0;
                    }
                },
                {
                    id: "all_could_dos",
                    name: "Could Be Champ",
                    image: "tile007.png",
                    criteria: "Complete all 'Could Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const couldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-could"));
                        return couldDos.length > 0 && couldDos.every(taskKey => tasks[taskKey].completed === true);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const couldDos = Object.keys(tasks).filter(taskKey => taskKey.includes("-could"));
                        const completedCouldDos = couldDos.filter(taskKey => tasks[taskKey].completed === true).length;
                        return couldDos.length > 0 ? (completedCouldDos / couldDos.length) * 100 : 0;
                    }
                },
                {
                    id: "all_tasks",
                    name: "Lesson Legend",
                    image: "tile008.png",
                    criteria: "Complete all 'Must', 'Should', and 'Could Do' activities.",
                    isAchieved: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        return Object.values(tasks).every(task => task.completed);
                    },
                    getProgress: (userData, topicKey) => {
                        const tasks = userData.completedTasks?.[topicKey] || {};
                        const completedTasks = Object.values(tasks).filter(task => task.completed).length;
                        return Object.keys(tasks).length > 0 ? (completedTasks / Object.keys(tasks).length) * 100 : 0;
                    }
                },
                {
                    id: "sp_500",
                    name: "SP Starter",
                    image: "tile009.png",
                    criteria: "Earn 500 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 500,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 500) * 100, 100)
                },
                {
                    id: "sp_1000",
                    name: "SP Collector",
                    image: "tile010.png",
                    criteria: "Earn 1,000 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 1000,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 1000) * 100, 100)
                },
                {
                    id: "sp_5000",
                    name: "SP Titan",
                    image: "tile011.png",
                    criteria: "Earn 5,000 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 5000,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 5000) * 100, 100)
                },
                {
                    id: "sp_9000",
                    name: "SP Overlord",
                    image: "tile012.png",
                    criteria: "Earn 9,000 Synapse Points.",
                    isAchieved: (userData) => userData.synapsePoints >= 9000,
                    getProgress: (userData) => Math.min((userData.synapsePoints / 9000) * 100, 100)
                }
        ]
    }
    
};