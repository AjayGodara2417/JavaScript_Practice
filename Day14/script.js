// // try {
// //     let lastName = 'Yetayeh'
// //     let fullName = fistName + ' ' + lastName
// //   } catch (err) {
// //     console.error(err)
// //   }
// try {
//     let lastName = 'Yetayeh'
//     let fullName = fistName + ' ' + lastName
//   } catch (err) {
//     // console.error(err) // we can use console.log() or console.error()
//   } finally {
//     console.log('In any case I will be executed')
//   }
// try {
//     let lastName = 'Yetayeh'
//     let fullName = fistName + ' ' + lastName
//   } catch (err) {
//     console.log('Name of the error', err.name)
//     console.log('Error message', err.message)
//   } finally {
//     console.log('In any case I will be executed')
//   }
// const throwErrorExampleFun = () => {
//     let message
//     let x = "str";
//     try {
//       if (x == '') throw 'empty'
//       if (isNaN(x)) throw 'not a number'
//       x = Number(x)
//       if (x <= 5) throw 'too low'
//       if (x >= 10) throw 'too high'
//     } catch (err) {
//       console.log(err)
//     }
//   }
//   throwErrorExampleFun()
try {
  let a = 1;
  let b = 0;
  if(b == 0) throw "b is empty"
  let sum = a + b;
  console.log(sum)
} catch (err) {
  console.log(err)
  console.log(err.name)
  console.log(err.message)
} finally {
  let b = 3;
  console.log(3+2)
}